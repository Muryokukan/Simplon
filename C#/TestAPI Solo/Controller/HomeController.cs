﻿using Microsoft.AspNetCore.Mvc;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        return View();
    }

    [HttpPost]
    public IActionResult CreateMessage()
    {
        TempData["Message"] = "Action exécutée avec succès !";
        return RedirectToAction("Index");
    }
}
