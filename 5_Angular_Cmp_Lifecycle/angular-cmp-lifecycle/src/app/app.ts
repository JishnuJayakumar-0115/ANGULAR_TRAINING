import { Component, signal } from '@angular/core';
import { Lifecycle } from './lifecycle/lifecycle';

@Component({
  selector: 'app-root',
  imports: [Lifecycle],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-cmp-lifecycle');

  isVisible = signal(false);
  //text = signal('Number: ' + (Math.random() * 100).toFixed(2));
  text = signal(+(Math.random() * 100).toFixed(2));

  onToggleVisibility() {
    this.isVisible.set(!this.isVisible());
  }

  onChange() {
    this.text.set(+(Math.random() * 100).toFixed(2));
  }
}
