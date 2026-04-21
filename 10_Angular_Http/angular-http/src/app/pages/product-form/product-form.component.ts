import { Component, inject, input, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  imports: [FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent implements OnInit {
  productId = input<number>(0);
  productService = inject(ProductService);

  product: Product = {
    id: 0,
    name: '',
    price: 0,
  };

  ngOnInit() {
    if (this.productId()) {
      this.productService.getById(this.productId()).subscribe((res) => {
        this.product = res;
      });
    }
  }

  save() {
    if (this.product.id) {
      this.productService.update(this.product.id, this.product).subscribe();
    } else {
      this.productService.create(this.product).subscribe();
    }
  }
}
