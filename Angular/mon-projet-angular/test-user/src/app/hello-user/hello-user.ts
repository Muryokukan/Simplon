import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hello-user',
  imports: [FormsModule],
  templateUrl: './hello-user.html',
  styleUrl: './hello-user.css'
})
export class HelloUser {
  nameUser: string = "Anonymopus";
  count: number = 0;

  incrementCount() {
    this.count++;
  }
}
