using Microsoft.EntityFrameworkCore;
using todos.api.Models.Entities;

namespace todos.api
{
    public class MainDbContext : DbContext
    {
        public DbSet<Todo> Todos { get; set; }
        
        public MainDbContext(DbContextOptions options) : base(options)
        {
        }
        
        
    }
}