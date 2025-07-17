using Microsoft.AspNetCore.Diagnostics.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using TestAPI_Solo.Classes;

var builder = WebApplication.CreateBuilder(args);

// Ajout MVC
builder.Services.AddControllersWithViews();

// Base de données
builder.Services.AddDbContext<TodoDb>(opt => opt.UseInMemoryDatabase("TodoList"));
builder.Services.AddDatabaseDeveloperPageExceptionFilter();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseStaticFiles(); // du CSS/JS plus tard
app.UseRouting();
app.UseAuthorization();

// Route vers le contrôleur
app.MapDefaultControllerRoute();

// Si tu veux garder les endpoints minimal API :
app.MapGet("/todoitems", async (TodoDb db) =>
    await db.Todos.ToListAsync());

app.Run();
