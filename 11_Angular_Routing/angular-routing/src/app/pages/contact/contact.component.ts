import { Component, DestroyRef, inject, input } from '@angular/core';
import { ActivatedRoute, ResolveFn } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  id1 = input<string>();
  id2 = input<string>();

  id1$: string = '';
  id2$: string = '';

  msg = input<string>();
  contact = input<string>();

  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);

  // using observables

  ngOnInit() {
    console.log(this.activatedRoute);
    const subscription = this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.id1$ = paramMap.get('id1') || '';
      this.id2$ = paramMap.get('id2') || '';
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}

export const contactResolver: ResolveFn<string> = () => {
  return 'contact Resolver';
};
