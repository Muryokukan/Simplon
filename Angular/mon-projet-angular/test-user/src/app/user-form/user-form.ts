import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// déclarer le user avant le composant
interface User {
  firstName: string;
  lastName: string;
  email: string;
}

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css'
})

export class UserForm { 
  userForm: FormGroup;
  submittedUser: User | null = null;
  
  
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });
    }
    onSubmit() {
      if (this.userForm.valid) {
        // Récupère les valeurs du formulaire
        this.submittedUser = {
          firstName: this.userForm.value.firstName,
          lastName: this.userForm.value.lastName,
          email: this.userForm.value.email
        };
        
        console.log('Données soumises:', this.submittedUser);
        
        // Optionnel : réinitialiser le formulaire
        this.userForm.reset();
      }
    }
}
