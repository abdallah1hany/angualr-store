import { Component, OnInit } from '@angular/core';
import { StoreService } from '../services/store.service';
import { Product } from '../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-by-category',
  templateUrl: './products-by-category.component.html',
  styleUrls: ['./products-by-category.component.css']
})
export class ProductsByCategoryComponent implements OnInit {
  products!: Product[];
category!:string;
  constructor(private router:Router  ,  private productService: StoreService) { }

  ngOnInit(): void {
    this.getProductsByCategory(this.router.url.split('/')[2]);
  }

  getProductsByCategory(category: string): void {
    this.productService.getProductsByCategory(category)
      .subscribe(products => this.products = products);
  }
  selectProduct(productId: number) {
    this.router.navigate(['/selected-product', productId]);
  }
}
