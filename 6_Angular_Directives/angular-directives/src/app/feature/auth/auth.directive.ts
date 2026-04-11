import {
  Directive,
  effect,
  inject,
  input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
})
export class AuthDirective {
  userType = input.required<'admin' | 'user' | 'guest'>({ alias: 'appAuth' });
  private authService = inject(AuthService);
  private templateRef = inject(TemplateRef); //gives access to the content of the template.
  private viewContainerRef = inject(ViewContainerRef); //gives access to the place in the DOM where the directive is used.

  constructor() {
    effect(() => {
      if (this.authService.activePermission() === this.userType()) {
        console.log('auth directive', 'show');
        this.viewContainerRef.createEmbeddedView(this.templateRef); //tells angular to render some new contents into a certain place in the DOM.
      } else {
        console.log('auth directive', 'hide');
        this.viewContainerRef.clear(); //remove any embedded view that has been rendered.
      }
    });
  }
}
