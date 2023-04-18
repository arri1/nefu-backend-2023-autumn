using Microsoft.Extensions.Options;
using Telegram.Bot;
using TelegramBot.TelegramBot;

namespace TelegramBot.HostedServices;
public class TelegramBotHostedService : IHostedService
{
    private readonly ILogger<TelegramBotHostedService> _logger;
    private readonly IServiceProvider _serviceProvider;
    private readonly TelegramBotOptions _telegramBotOptions;

    public TelegramBotHostedService(
        ILogger<TelegramBotHostedService> logger,
        IServiceProvider serviceProvider,
        IOptions<TelegramBotOptions> telegramBotOptions)
    {
        _logger = logger;
        _serviceProvider = serviceProvider;
        _telegramBotOptions = telegramBotOptions.Value;
    }

    public async Task StartAsync(CancellationToken cancellationToken)
    {
        using var scope = _serviceProvider.CreateScope();
        var botClient = scope.ServiceProvider.GetRequiredService<ITelegramBotClient>();
        _logger.LogInformation($"Setting webhook: {_telegramBotOptions.WebhookUrl}");
        await botClient.SetWebhookAsync(
            url: _telegramBotOptions.WebhookUrl,
            cancellationToken: cancellationToken);
    }

    public async Task StopAsync(CancellationToken cancellationToken)
    {
        using var scope = _serviceProvider.CreateScope();
        var botClient = scope.ServiceProvider.GetRequiredService<ITelegramBotClient>();

        await botClient.DeleteWebhookAsync(cancellationToken: cancellationToken);
    }
}
