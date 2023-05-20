import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../services/store.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private router: Router, private productService: StoreService ) {}

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getProducts()
      .subscribe((products: Product[]) => {
        this.products = products;
      });
  }

  selectProduct(productId: number) {
    this.router.navigate(['/selected-product', productId]);
  }
}
