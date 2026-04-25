import { Component, inject, signal } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterOutlet,
  RouterLinkActive,
} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-routing');

  router = inject(Router);

  goToAbout() {
    this.router.navigate(['/about'], {
      queryParams: { id: 1 },
    });
  }
}
