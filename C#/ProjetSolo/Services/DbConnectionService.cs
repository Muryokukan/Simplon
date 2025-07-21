using Npgsql;

namespace GestionBibliotheque.Services
{
    public class DbConnectionService : IDbConnectionService
    {
        private readonly IConfiguration _configuration;
        private readonly string _connectionString;

        public DbConnectionService(IConfiguration configuration)
        {
            _configuration = configuration;
            _connectionString = BuildConnectionString();
        }


        public string GetConnectionString()
        {
            return _connectionString;
        }

        public async Task<bool> TestConnectionAsync()
        {
            try
            {
                using var connection = new NpgsqlConnection(_connectionString);
                await connection.OpenAsync();
                return true;
            }
            catch
            {
                return false;
            }
        }

        private string BuildConnectionString()
        {
            // Vous pouvez construire la chaîne depuis différentes sources
            var host = _configuration["Database:Host"] ?? "localhost";

            var database = _configuration["Database:Name"] ?? "bibliotheque";
            var username = _configuration["Database:Username"] ?? "postgres";
            var password = _configuration["Database:Password"] ?? "";

            return $"Host={host};Database={database};Username={username};Password={password}";
        }
    }
}
