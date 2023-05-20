import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from '../services/store.service';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-selected-product',
  templateUrl: './selected-product.component.html',
  styleUrls: ['./selected-product.component.css']
})
export class SelectedProductComponent implements OnInit {
  product!: Product;
  productId!: number;

  constructor(private route: ActivatedRoute, private productService: StoreService, private cartService: CartService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const productId = Number(params.get('id'));
      this.productId = productId;
      this.fetchProduct(productId);
    });
  }

  fetchProduct(productId: number) {
    this.productService.getProductById(productId)
      .subscribe((product: Product) => {
        this.product = product;
        
      });
  }
  addToCart() {
    this.cartService.addToCart(this.product);
  }
}
