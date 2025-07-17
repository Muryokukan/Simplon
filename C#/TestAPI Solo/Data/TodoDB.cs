using Microsoft.EntityFrameworkCore;
using TestAPI_Solo.Classes;

class TodoDb : DbContext
{
    public TodoDb(DbContextOptions<TodoDb> options)
        : base(options) { }
    public DbSet<Todo> Todos => Set<Todo>();
}