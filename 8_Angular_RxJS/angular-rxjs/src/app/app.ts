import { AsyncPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-rxjs');

  // Observable
  start() {
    const obs$ = new Observable((observer) => {
      observer.next('Hi');
      observer.next('Hello');
      observer.complete();
    });

    obs$.subscribe((value) => {
      console.log(value);
    });
  }

  // Async Pipe
  data$ = new Observable((observer) => {
    setTimeout(() => observer.next('Updated template after 3 sec.'), 3000);
  });

  // BehaviorSubject
  user$ = new BehaviorSubject<string>('Guest');

  changeUser() {
    this.user$.next('Employee');
  }

  users$ = new BehaviorSubject<string[]>(['Alice', 'Bob']);

  addUser(name: string) {
    const current = this.users$.value;
    this.users$.next([...current, name]);
  }

  // RxJS Operators
  usersCount$ = this.users$.pipe(
    map((users) => users.length),
    tap((value) => console.log(value)),
  );

  // signal
  count = signal(0);

  increment() {
    this.count.set(this.count() + 1);
  }

  // Observable to Signal
  usersSignal = toSignal(this.users$, { initialValue: [] });

  // Signal to Observable
  count$ = toObservable(this.count);
}
