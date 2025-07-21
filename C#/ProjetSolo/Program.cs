using Microsoft.EntityFrameworkCore;
using GestionBibliotheque.Data;
using GestionBibliotheque.Services;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// Enregistrement du service de connexion
builder.Services.AddSingleton<IDbConnectionService, DbConnectionService>();

// Configuration de PostgreSQL avec le service
builder.Services.AddDbContext<BibliothequeContext>((serviceProvider, options) =>
{
    var connectionService = serviceProvider.GetRequiredService<IDbConnectionService>();
    options.UseNpgsql(connectionService.GetConnectionString());
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Test de connexion au d�marrage
using (var scope = app.Services.CreateScope())
{
    var connectionService = scope.ServiceProvider.GetRequiredService<IDbConnectionService>();
    var isConnected = await connectionService.TestConnectionAsync();

    if (isConnected)
        Console.WriteLine(" Connexion � la base de donn�es r�ussie !");
    else
        Console.WriteLine(" �chec de connexion � la base de donn�es !");
}

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
