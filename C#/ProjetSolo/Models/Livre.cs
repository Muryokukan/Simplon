namespace GestionBibliotheque.Models
{
    public class Livre
    {
        public int Id { get; set; }
        public string Titre { get; set; } = string.Empty;
        public string Auteur { get; set; } = string.Empty;
        public string ISBN { get; set; } = string.Empty;
        public DateTime DatePublication { get; set; }
        public bool EstDisponible { get; set; } = true;

        // Relation avec les emprunts
        public List<Emprunt> Emprunts { get; set; } = new List<Emprunt>();
    }
}
