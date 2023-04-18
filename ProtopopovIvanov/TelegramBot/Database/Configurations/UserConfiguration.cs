using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TelegramBot.Entities;

namespace TelegramBot.Database.Configurations;

public class UserConfiguration : IEntityTypeConfiguration<MyUser>
{
    public void Configure(EntityTypeBuilder<MyUser> builder)
    {
    }
}