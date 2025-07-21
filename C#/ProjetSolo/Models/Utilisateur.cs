namespace GestionBibliotheque.Models
{
    public class Utilisateur
    {
        public int Id { get; set; }
        public string Nom { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public DateTime DateInscription { get; set; }

        // Relation avec les emprunts
        public List<Emprunt> Emprunts { get; set; } = new List<Emprunt>();
    }
}
