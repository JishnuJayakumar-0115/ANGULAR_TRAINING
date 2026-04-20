import { Component, signal } from '@angular/core';
import { LoginFormComponent } from './template-driven/login-form/login-form.component';
import { ReactiveLoginFormComponent } from './reactive-form/reactive-login-form/reactive-login-form.component';

@Component({
  selector: 'app-root',
  // imports: [LoginFormComponent],
  imports: [ReactiveLoginFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-forms');
}
