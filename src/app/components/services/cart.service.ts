

// import { Injectable } from '@angular/core';
// import { Product } from '../models/product.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {
//   private cartKey = 'cartItems';

//   constructor() { }

//   private getCartItemsFromLocalStorage(): Product[] {
//     const cartItemsString = localStorage.getItem(this.cartKey);
//     if (cartItemsString) {
//       return JSON.parse(cartItemsString);
//     }
//     return [];
//   }

//   private updateCartItemsLocalStorage(cartItems: Product[]): void {
//     localStorage.setItem(this.cartKey, JSON.stringify(cartItems));
//   }

//   addToCart(item: Product): void {
//     const cartItems = this.getCartItemsFromLocalStorage();
//     cartItems.push(item);
//     this.updateCartItemsLocalStorage(cartItems);
//   }

//   removeFromCart(item: Product): void {
//     const cartItems = this.getCartItemsFromLocalStorage();
//     const index = cartItems.findIndex(cartItem => cartItem.id === item.id);
//     if (index !== -1) {
//       cartItems.splice(index, 1);
//       this.updateCartItemsLocalStorage(cartItems);
//     }
//   }

//   updateQuantity(item: Product, quantity: number): void {
//     const cartItems = this.getCartItemsFromLocalStorage();
//     const index = cartItems.findIndex(cartItem => cartItem.id === item.id);
//     if (index !== -1) {
//       cartItems[index].quantity = quantity;
//       this.updateCartItemsLocalStorage(cartItems);
//     }
//   }

//   getCartItems(): Product[] {
//     return this.getCartItemsFromLocalStorage();
//   }

//   clearCart(): void {
//     localStorage.removeItem(this.cartKey);
//   }
// }



// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
// import { Product } from '../models/product.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {
//   private cartItems: Product[] = [];
//   private cartSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(this.cartItems);

//   constructor() { }

//   getCartItems(): BehaviorSubject<Product[]> {
//     return this.cartSubject;
//   }

//   addToCart(product: Product): void {
//     const existingProduct = this.cartItems.find(item => item.id === product.id);
//     if (existingProduct) {
//       existingProduct.quantity += 1;
//     } else {
//       product.quantity = 1;
//       this.cartItems.push(product);
//     }
//     this.cartSubject.next(this.cartItems);
//   }

//   removeFromCart(product: Product): void {
//     const index = this.cartItems.findIndex(item => item.id === product.id);
//     if (index !== -1) {
//       this.cartItems.splice(index, 1);
//       this.cartSubject.next(this.cartItems);
//     }
//   }

//   updateQuantity(product: Product, quantity: number): void {
//     const item = this.cartItems.find(item => item.id === product.id);
//     if (item) {
//       item.quantity = quantity;
//       this.cartSubject.next(this.cartItems);
//     }
//   }
//   increaseQuantity(product: Product): void {
//     const item = this.cartItems.find(item => item.id === product.id);
//     if (item) {
//       item.quantity += 1;
//       this.cartSubject.next(this.cartItems);
//     }
//   }

//   decreaseQuantity(product: Product): void {
//     const item = this.cartItems.find(item => item.id === product.id);
//     if (item) {
//       if (item.quantity > 1) {
//         item.quantity -= 1;
//         this.cartSubject.next(this.cartItems);
//       }
//     }
//   }
// }

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  private cartItems: Product[] = [];

  constructor() {
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      this.cartItems = JSON.parse(savedCartItems);
      this.cartItemsSubject.next(this.cartItems);
    }
  }

  getCartItems(): Observable<Product[]> {
    return this.cartItemsSubject.asObservable();
  }

  addToCart(product: Product): void {
    const existingProduct = this.cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      product.quantity = 1;
      this.cartItems.push(product);
    }
    this.cartItemsSubject.next(this.cartItems);
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  removeFromCart(productId: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
    this.cartItemsSubject.next(this.cartItems);
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  updateQuantity(productId: number, quantity: number): void {
    const product = this.cartItems.find(item => item.id === productId);
    if (product) {
      product.quantity = quantity;
      this.cartItemsSubject.next(this.cartItems);
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    }
  }

  increaseQuantity(productId: number): void {
    const product = this.cartItems.find(item => item.id === productId);
    if (product) {
      product.quantity += 1;
      this.cartItemsSubject.next(this.cartItems);
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    }
  }

  decreaseQuantity(productId: number): void {
    const product = this.cartItems.find(item => item.id === productId);
    if (product && product.quantity > 1) {
      product.quantity -= 1;
      this.cartItemsSubject.next(this.cartItems);
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    }
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  getTotalItems(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }
}
