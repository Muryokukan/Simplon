import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserForm } from './user-form/user-form';
import { HelloUser } from './hello-user/hello-user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserForm, HelloUser],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'test-user';
}
