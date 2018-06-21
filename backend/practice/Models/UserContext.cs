using Microsoft.EntityFrameworkCore;

namespace practice.Models
{                              // Прочитаєш -- поймеш звідки дані беруться 
    public class UserContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public UserContext(DbContextOptions<UserContext> options)
            : base(options)
        {
        }
    }
}