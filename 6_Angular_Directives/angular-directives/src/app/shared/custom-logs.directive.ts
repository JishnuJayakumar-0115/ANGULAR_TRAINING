import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appCustomLogs]',
  host: {
    '(click)': 'onLog()',
  },
})
export class CustomLogsDirective {
  private elementRef = inject(ElementRef);

  onLog() {
    console.log('log directive');
    console.log(this.elementRef.nativeElement);
  }
}
