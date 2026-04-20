import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-login-form',
  imports: [FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  invalidForm = signal(false);

  onSubmit(formData: NgForm) {
    if (formData.form.invalid) {
      this.invalidForm.set(true);
      return;
    }

    console.log(formData);
    console.log(formData.form.value.email, formData.form.value.password);
    this.invalidForm.set(false);
  }
}
