using Microsoft.EntityFrameworkCore;
using TelegramBot.Database;
using TelegramBot.Entities;

namespace TelegramBot.Graphql;

public class Query
{
    [UseOffsetPaging(IncludeTotalCount = true, MaxPageSize = 3)]
    [UseSorting]
    [UseFiltering]
    public IQueryable<MyUser> GetUsers(DataContext dataContext)  
    {  
        return dataContext.Set<MyUser>();  
    }
    
    public async Task<MyUser> GetUser(DataContext dataContext, int id)  
    {  
        return await dataContext.Set<MyUser>().FirstAsync(e => e.Id == id);  
    }
}