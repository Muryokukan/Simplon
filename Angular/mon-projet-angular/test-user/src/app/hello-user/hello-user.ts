import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hello-user',
  imports: [FormsModule, CommonModule],
  templateUrl: './hello-user.html',
  styleUrl: './hello-user.css'
})
export class HelloUser {
  nameUser: string = "Anonymous";
  count: number = 0;

  fruits: string[] = ['Pomme', 'Banane', 'Orange', 'Fraise'];

  incrementCount() {
    this.count++;
  }
}
