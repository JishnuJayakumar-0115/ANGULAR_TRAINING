import {
  CommonModule,
  CurrencyPipe,
  DatePipe,
  JsonPipe,
  LowerCasePipe,
  PercentPipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component, signal } from '@angular/core';
import { CaptalizePipe } from './shared/pipes/captalize.pipe';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { interval, map } from 'rxjs';
@Component({
  selector: 'app-root',
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    DatePipe,
    CurrencyPipe,
    PercentPipe,
    JsonPipe,
    CaptalizePipe,
    FormsModule,
    FilterPipe,
    CommonModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-pipes');

  name = signal('angular pipes');
  today = signal(new Date());
  price = signal(1234.5678);
  percentValue = signal(0.75);
  data = signal({ name: 'John', age: 25 });

  items = signal(['A', 'B', 'C', 'D']);
  searchText = signal('');

  time$ = interval(1000).pipe(map(() => new Date()));
}
