namespace GestionBibliotheque.Models
{
    public class Emprunt
    {
        public int Id { get; set; }
        public DateTime DateEmprunt { get; set; }
        public DateTime DateRetourPrevue { get; set; }
        public DateTime? DateRetourEffective { get; set; } // Nullable car pas encore retourné

        // Clés étrangère
        public int LivreId { get; set; }
        public int UtilisateurId { get; set; }

        // Relations de navigation
        public Livre Livre { get; set; } = null!;
        public Utilisateur Utilisateur { get; set; } = null!;
    }
}
