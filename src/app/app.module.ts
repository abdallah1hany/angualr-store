import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HeroComponent } from './components/hero/hero.component';
import { HttpClientModule } from '@angular/common/http';

import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { FeatureCardComponent } from './components/feature-card/feature-card.component';
import { SelectedProductComponent } from './components/selected-product/selected-product.component';
import { ProductsComponent } from './components/products/products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsByCategoryComponent } from './components/products-by-category/products-by-category.component';
import { FormsModule } from '@angular/forms';
import { ContactUsComponent } from './components/contact-us/contact-us.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroComponent,

    FooterComponent,
    HomeComponent,
    CartComponent,
    
    FeatureCardComponent,
    SelectedProductComponent,
    ProductsComponent,
    ProductsByCategoryComponent,
    ContactUsComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
