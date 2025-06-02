import { Component } from '@angular/core';

@Component({
  selector: 'app-mon-premier-component',
  templateUrl: './mon-premier-component.component.html',
  styleUrl: './mon-premier-component.component.css' // Note: styleUrl (singulier) depuis Angular 17+
})
export class MonPremierComponentComponent {
  title = 'Mon Premier Component';
  message = 'Bienvenue dans Angular 20 !';
  
  onClick() {
    this.message = 'Bouton cliqué !';
  }
}
