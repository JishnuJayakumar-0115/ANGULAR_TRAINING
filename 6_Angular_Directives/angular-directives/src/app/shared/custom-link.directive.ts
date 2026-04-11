import { Directive, ElementRef, inject, input } from '@angular/core';
import { CustomLogsDirective } from './custom-logs.directive';

@Directive({
  selector: 'a[appCustomLink]',
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class CustomLinkDirective {
  //queryParam = input('custom-link-demo');
  queryParam = input('custom-link-demo', { alias: 'appCustomLink' });
  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

  constructor() {
    console.log('custom link is active!');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const confirmRedirect = window.confirm('Do you want to redirect?');

    if (confirmRedirect) {
      const url = new URL(this.hostElementRef.nativeElement.href);
      url.searchParams.set('custom', this.queryParam());
      this.hostElementRef.nativeElement.href = url.toString();
      return;
    }

    event?.preventDefault();
  }
}
