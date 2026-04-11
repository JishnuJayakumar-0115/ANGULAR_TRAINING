import { Component, signal } from '@angular/core';
import { AuthComponent } from './feature/auth/auth.component';
import { ExternalLinksComponent } from './feature/external-links/external-links.component';
import { AuthDirective } from './feature/auth/auth.directive';
import { CustomLogsDirective } from './shared/custom-logs.directive';

@Component({
  selector: 'app-root',
  imports: [AuthComponent, ExternalLinksComponent, AuthDirective],
  templateUrl: './app.html',
  styleUrl: './app.css',
  hostDirectives: [CustomLogsDirective],
})
export class App {
  protected readonly title = signal('angular-directives');
}
