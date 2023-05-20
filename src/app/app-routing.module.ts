import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FeatureCardComponent } from './components/feature-card/feature-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsByCategoryComponent } from './components/products-by-category/products-by-category.component';
import { ProductsComponent } from './components/products/products.component';
import { SelectedProductComponent } from './components/selected-product/selected-product.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'categories',
    component: FeatureCardComponent
  },
  { path: 'products-by-category/:category', component: ProductsByCategoryComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'selected-product/:id', component: SelectedProductComponent },
  { path: 'cart', component: CartComponent },
  {path: 'contact', component: ContactUsComponent},
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
