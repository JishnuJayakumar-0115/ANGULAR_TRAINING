import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { HighlightDirective } from '../../shared/highlight.directive';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-auth',
  imports: [FormsModule, HighlightDirective, NgIf],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  userId = signal('');
  password = signal('');
  isAdmin = computed(() => this.authService.activePermission() === 'admin');
  private authService = inject(AuthService);

  onSubmit() {
    this.authService.authenticate(this.userId(), this.password());
  }
}
