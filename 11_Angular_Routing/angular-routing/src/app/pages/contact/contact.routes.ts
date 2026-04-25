import { CanMatchFn, RedirectCommand, Router, Routes } from '@angular/router';
import { ContactComponent, contactResolver } from './contact.component';
import { inject } from '@angular/core';

const demoCanMatch: CanMatchFn = () => {
  const router = inject(Router);
  const getAccess = Math.random();

  return getAccess < 0.5
    ? true
    : new RedirectCommand(router.parseUrl('/unauthorized'));
};

export const contactRoutes: Routes = [
  {
    path: ':id1/:id2',
    component: ContactComponent,
    canMatch: [demoCanMatch],
  },
  {
    path: ':id1',
    component: ContactComponent,
  },
  {
    path: '',
    component: ContactComponent,
    data: {
      msg: 'Static Data',
    },
    resolve: {
      contact: contactResolver,
    },
  },
];
