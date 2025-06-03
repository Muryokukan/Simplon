import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {
  title = 'Bienvenue sur Mon Site';
  subtitle = 'Découvrez nos services exceptionnels';
  
  services = [
    {
      icon: '🌟',
      title: 'Service Premium', 
      description: 'Un service de qualité supérieure pour tous vos besoins'
    },
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'Des solutions modernes et innovantes pour votre entreprise'
    },
    {
      icon: '💡',
      title: 'Conseil Expert',
      description: 'Nos experts vous accompagnent dans tous vos projets'
    }
  ];

  onContactClick() {
    alert('Formulaire de contact à venir !');
  }

  onServiceClick(service: any) {
    console.log('Service sélectionné:', service.title);
  }
}
