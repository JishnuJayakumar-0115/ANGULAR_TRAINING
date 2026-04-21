import { Component, inject, Inject, OnInit, signal } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  products = signal<Product[]>([]);

  productService = inject(ProductService);

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAll().subscribe({
      next: (res: Product[]) => (this.products.set(res)),
      error: (err: any) => console.error(err),
    });
  }

  delete(id: number) {
    this.productService.delete(id).subscribe(() => {
      this.loadProducts();
    });
  }
}
