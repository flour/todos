using System;

namespace todos.api.Models.Entities
{
    public class Todo
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public DateTime Created { get; set; } = DateTime.UtcNow;
        public DateTime Estimate { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
    }
}