using Telegram.Bot;

namespace TelegramBot.TelegramBot;

public static class TelegramBotExtensions
{
    public static IServiceCollection AddTelegramBotClient(this IServiceCollection serviceCollection, IConfiguration configuration)
    {
        var options = configuration.GetSection("TelegramBot").Get<TelegramBotOptions>();

        var client = new TelegramBotClient(options.Token);
        serviceCollection.AddScoped<ITelegramBotClient>(e => client);
        return serviceCollection;
    }
}