import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  activePermission = signal<'admin' | 'user' | 'guest'>('guest');

  authenticate(userId: string, password: string) {
    console.log(userId, password);
    if (userId === 'admin' && password === 'admin') {
      this.activePermission.set('admin');
    } else if (userId === 'user' && password === 'user') {
      this.activePermission.set('user');
    } else {
      this.activePermission.set('guest');
    }
  }
}
