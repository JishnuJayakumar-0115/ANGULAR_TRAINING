import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-countdown',
  imports: [],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.css',
})
export class CountdownComponent implements OnInit {
  counter = signal(10);

  ngOnInit() {
    this.startCountdown();
  }

  startCountdown() {
    const interval = setInterval(() => {
      if (this.counter() > 0) {
        this.counter.update((v) => v - 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);
  }
}
