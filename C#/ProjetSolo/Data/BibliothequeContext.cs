using Microsoft.EntityFrameworkCore;
using GestionBibliotheque.Models;

namespace GestionBibliotheque.Data
{
    public class BibliothequeContext : DbContext
    {
        public BibliothequeContext(DbContextOptions<BibliothequeContext> options)
            : base(options)
        {
        }

        // Tables de la base de données
        public DbSet<Livre> Livres { get; set; }
        public DbSet<Utilisateur> Utilisateurs { get; set; }
        public DbSet<Emprunt> Emprunts { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configuration des relations
            modelBuilder.Entity<Emprunt>()
                .HasOne(e => e.Livre)
                .WithMany(l => l.Emprunts)
                .HasForeignKey(e => e.LivreId);

            modelBuilder.Entity<Emprunt>()
                .HasOne(e => e.Utilisateur)
                .WithMany(u => u.Emprunts)
                .HasForeignKey(e => e.UtilisateurId);
        }
    }
}
