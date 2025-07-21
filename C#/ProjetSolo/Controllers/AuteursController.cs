using Microsoft.AspNetCore.Mvc;

namespace ProjetSolo.Controllers
{
    public class AuteursController : Controller
    {
        public IActionResult Index()
        {
            ViewData["Title"] = "Gestion des Auteurs";
            return View();
        }
    }
}
