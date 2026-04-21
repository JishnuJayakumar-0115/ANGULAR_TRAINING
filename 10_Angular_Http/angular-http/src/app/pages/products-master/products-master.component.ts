import { Component, inject, OnInit, signal } from '@angular/core';
import { Product } from '../../models/product';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-master',
  imports: [ReactiveFormsModule],
  templateUrl: './products-master.component.html',
  styleUrl: './products-master.component.css',
})
export class ProductsMasterComponent implements OnInit {
  products = signal<Product[]>([]);
  form!: FormGroup;

  isEditMode = signal(false);
  selectedId = signal<number | null>(null);

  productService = inject(ProductService);
  fb = inject(FormBuilder);

  ngOnInit() {
    this.initForm();
    this.loadProducts();
  }

  initForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(1)]],
    });
  }

  loadProducts() {
    this.productService.getAll().subscribe({
      next: (res) => this.products.set(res),
      error: (err) => console.error(err),
    });
  }

  edit(id: number) {
    this.productService.getById(id).subscribe((res) => {
      this.form.patchValue({
        name: res.name,
        price: res.price,
      });

      this.isEditMode.set(true);
      this.selectedId.set(res.id);
    });
  }

  delete(id: number) {
    this.productService.delete(id).subscribe(() => {
      this.loadProducts();
    });
  }

  submit() {
    if (this.form.invalid) return;

    const payload: Product = {
      id: this.selectedId ?? 0,
      ...this.form.value,
    };

    if (this.isEditMode() && this.selectedId()) {
      // UPDATE
      this.productService
        .update(this.selectedId() ?? 0, payload)
        .subscribe(() => {
          this.afterSave();
        });
    } else {
      // CREATE
      this.productService.create(payload).subscribe(() => {
        this.afterSave();
      });
    }
  }

  afterSave() {
    this.form.reset();
    this.isEditMode.set(false);
    this.selectedId.set(null);
    this.loadProducts();
  }
}
