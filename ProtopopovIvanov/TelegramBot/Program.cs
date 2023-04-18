using Microsoft.EntityFrameworkCore;
using Telegram.Bot;
using TelegramBot.Database;
using TelegramBot.Graphql;
using TelegramBot.HostedServices;
using TelegramBot.Options;
using TelegramBot.TelegramBot;

var builder = WebApplication.CreateBuilder(args);
var services = builder.Services;
var configuration = builder.Configuration;

// Add services to the container.
services.AddOptions();
services.AddCors();

services.Configure<TelegramBotOptions>(configuration.GetSection("TelegramBot"));

// Подключение базы данных
var databaseOptions = configuration.GetSection("Database").Get<DatabaseOptions>();
services.AddPooledDbContextFactory<DataContext>(options =>
{
    options.UseNpgsql(databaseOptions.GetConnectionString());
});
services.AddScoped<DataContext>();

// Регистрация телеграм бота
builder.Services.AddHttpClient("TelegramBot")
                .AddTypedClient<ITelegramBotClient>((httpClient, sp) =>
                {
                    var telegramBotOptions = configuration.GetSection("TelegramBot").Get<TelegramBotOptions>();
                    TelegramBotClientOptions options = new(telegramBotOptions.Token);
                    return new TelegramBotClient(options, httpClient);
                });
services.AddHostedService<TelegramBotHostedService>();

// Регистрация Graphql
services.AddGraphQLServer()
    .RegisterDbContext<DataContext>(DbContextKind.Pooled)
    .AddQueryType<Query>()
    .AddMutationType<Mutation>()
    .AddSorting()
    .AddFiltering();

services.AddControllers()
    .AddNewtonsoftJson();

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseHttpsRedirection();
app.UseCors(e => 
    e.AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader());

app.MapGraphQLHttp("/graphql");
app.UseGraphQLAltair("/graphql-ui");
app.MapControllers();

using (var scope = app.Services.CreateScope())
{
    var dataContextFactory = scope.ServiceProvider.GetRequiredService<IDbContextFactory<DataContext>>();
    var dataContext = dataContextFactory.CreateDbContext();
    dataContext.Database.MigrateAsync().GetAwaiter().GetResult();
}

app.Run();
