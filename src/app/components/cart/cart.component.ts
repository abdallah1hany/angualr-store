
import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
    });
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }

  removeFromCart(product: Product): void {
    this.cartService.removeFromCart(product.id);
  }

  updateQuantity(product: Product, quantity: number): void {
    this.cartService.updateQuantity(product.id, quantity);
  }
  increaseQuantity(product: Product): void {
        this.cartService.increaseQuantity(product.id);
      }
    
      decreaseQuantity(product: Product): void {
        this.cartService.decreaseQuantity(product.id);
      }
      getTotalPrice(): number {
       return this.cartService.getTotalPrice();
      }
    
      getTotalItems(): number {
        return this.cartService.getTotalItems();
      }
}
