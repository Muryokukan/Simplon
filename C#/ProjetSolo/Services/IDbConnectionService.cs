namespace GestionBibliotheque.Services
{
    public interface IDbConnectionService
    {
        string GetConnectionString();
        Task<bool> TestConnectionAsync();
    }
}
