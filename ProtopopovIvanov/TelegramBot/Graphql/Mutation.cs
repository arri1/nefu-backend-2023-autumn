using Microsoft.EntityFrameworkCore;
using TelegramBot.Database;
using TelegramBot.Entities;
using TelegramBot.Graphql.Models;

namespace TelegramBot.Graphql;

public class Mutation
{
    public async Task<MyUser> CreateUser(DataContext dataContext, CreateUserDto user)  
    {  
        var data = new MyUser  
        {  
            Name = user.Name,  
            Email = user.Email,
            Password = user.Password
        };  
        dataContext.Set<MyUser>().Add(data);  
        await dataContext.SaveChangesAsync();  
        return data;  
    }
    
    public async Task<MyUser> UpdateUser(DataContext dataContext, UpdateUserDto user)
    {
        var data = dataContext.Set<MyUser>().FirstOrDefault(e => e.Id == user.Id);
        if (data == null)
        {
            throw new Exception($"Пользователя в id {user.Id} нет в базе данных");
        }
        data.Name = user.Name; 
        data.Email = user.Email; 
        data.Password = user.Password; 
        dataContext.Set<MyUser>().Update(data);  
        await dataContext.SaveChangesAsync();  
        return data;  
    }
    
    public async Task<bool> DeleteUser(DataContext dataContext, DeleteUserDto user)
    {
        var data = await dataContext.Set<MyUser>().FirstOrDefaultAsync(e => e.Id == user.Id);
        if (data == null)
        {
            return false;
        }
        
        dataContext.Set<MyUser>().Remove(data);  
        await dataContext.SaveChangesAsync();  
        return true;  
    }
}