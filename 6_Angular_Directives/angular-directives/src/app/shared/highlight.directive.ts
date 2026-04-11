import { Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
  },
})
export class HighlightDirective {
  appHighlight = input<string>('');

  private el = inject(ElementRef);

  onMouseEnter() {
    // this.highlight('blue');
    this.highlight(this.appHighlight());
  }

  onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
