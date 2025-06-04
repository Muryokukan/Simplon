import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserForm } from './user-form/user-form';
import { HelloUser } from './hello-user/hello-user';
import { AppRoutingModule } from './app.routes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserForm, HelloUser, AppRoutingModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'test-user';
}
