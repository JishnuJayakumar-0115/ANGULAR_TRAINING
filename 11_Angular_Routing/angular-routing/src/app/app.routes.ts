import { CanMatchFn, RedirectCommand, Router, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { inject } from '@angular/core';
import { StatsComponent } from './pages/home/stats/stats.component';
import { SettingsComponent } from './pages/home/settings/settings.component';
import { contactRoutes } from './pages/contact/contact.routes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'stats', component: StatsComponent },
      { path: 'settings', component: SettingsComponent },
    ],
  },
  {
    path: 'about',
    // component: AboutComponent,
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'contact',
    // children: contactRoutes,
    loadChildren: () =>
      import('./pages/contact/contact.routes').then((m) => m.contactRoutes),
  },
  { path: '**', component: NotFoundComponent },
];
