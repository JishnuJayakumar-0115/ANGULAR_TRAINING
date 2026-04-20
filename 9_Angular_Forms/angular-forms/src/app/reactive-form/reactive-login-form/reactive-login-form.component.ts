import { Component, computed } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { validate } from '@angular/forms/signals';

@Component({
  selector: 'app-reactive-login-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-login-form.component.html',
  styleUrl: './reactive-login-form.component.css',
})
export class ReactiveLoginFormComponent {
  form = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.email, Validators.required],
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6), passWordMustContainQnMark],
    }),
  });

  onSubmit() {
    console.log(this.form);
    console.log(this.form.value.email, this.form.value.password);
  }

  get emailIsInvalid() {
    return (
      this.form.controls.email.invalid &&
      this.form.controls.email.touched &&
      this.form.controls.email.dirty
    );
  }
  get passwordIsInvalid() {
    return (
      this.form.controls.password.invalid &&
      this.form.controls.password.touched &&
      this.form.controls.password.dirty
    );
  }
}

function passWordMustContainQnMark(control: AbstractControl) {
  const value = control.value || '';
  return value.includes('?') ? null : { notValid: true };
}
