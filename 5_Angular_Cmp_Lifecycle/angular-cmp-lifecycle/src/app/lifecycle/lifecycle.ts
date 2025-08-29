import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  imports: [],
  templateUrl: './lifecycle.html',
  styleUrl: './lifecycle.css',
})
export class Lifecycle
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  text = input<number | undefined>();

  private timer?: number;

  constructor() {
    console.log('constructor', this.text());
  }

  // ngOnInit() {
  //   console.log('ngOnInit', this.text());
  // }
  
  // ngOnInit() {
  //   console.log('ngOnInit', this.text());
  //   setInterval(() => {
  //     console.log('Timer : ' + (Math.random() * 100).toFixed(2));
  //   }, 1000);
  // }

  ngOnInit() {
    console.log('ngOnInit', this.text());
    this.timer = setInterval(() => {
      console.log('Timer : ' + (Math.random() * 100).toFixed(2));
    }, 1000);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', changes);
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  // ngOnDestroy() {
  //   console.log('ngOnDestroy');
  // }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    clearTimeout(this.timer);
  }
}
