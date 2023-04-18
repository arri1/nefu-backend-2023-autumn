using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Telegram.Bot;
using Telegram.Bot.Types;
using TelegramBot.Database;
using TelegramBot.Entities;

namespace TelegramBot.Controllers;

[Route("api/bot")]
public class TelegramBotController : ControllerBase
{
    private readonly ITelegramBotClient _telegramBotClient;
    private readonly DataContext _dataContext;

    public TelegramBotController(
        ITelegramBotClient telegramBotClient,
        DataContext dataContext)
    {
        _telegramBotClient = telegramBotClient;
        _dataContext = dataContext;
    }

    [HttpPost]
    public async Task<IActionResult> Post([FromBody] Update update)
    {
        if (update == null) return Ok();

        var message = update.Message;

        if (message.Text.Contains("/start"))
        {
            await _telegramBotClient.SendTextMessageAsync(message.Chat.Id, "Привет, чтобы получить список пользователей напиши команду /getusers");
        }
        else if (message.Text.Contains("/getusers"))
        {
            var users = await _dataContext.Set<MyUser>().Take(5).ToListAsync();
            var usersNames = string.Empty;
            foreach (var user in users)
            {
                if (string.IsNullOrEmpty(usersNames))
                {
                    usersNames = user.Name;
                }
                else
                {
                    usersNames = usersNames + $", {user.Name}";
                }
            }

            await _telegramBotClient.SendTextMessageAsync(message.Chat.Id, usersNames);
        }

        return Ok();
    }
}