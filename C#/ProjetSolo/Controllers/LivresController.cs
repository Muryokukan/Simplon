using Microsoft.AspNetCore.Mvc;

namespace ProjetSolo.Controllers
{
    public class LivresController : Controller
    {
        public IActionResult Index()
        {
            ViewData["Title"] = "Gestion des Livres";
            return View();
        }
    }
}
