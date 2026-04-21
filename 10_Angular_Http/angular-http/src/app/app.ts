import { Component, signal } from '@angular/core';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductFormComponent } from './pages/product-form/product-form.component';
import { ProductsMasterComponent } from './pages/products-master/products-master.component';

@Component({
  selector: 'app-root',
  imports: [ProductsMasterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-http');
}
