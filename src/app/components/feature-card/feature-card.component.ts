import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.css']
})
export class FeatureCardComponent implements OnInit {
categories :any =[];


constructor(private router: Router ,private storeService :StoreService ) { }

  ngOnInit(): void {
    this.storeService.getAllCategories().subscribe((data)=>{
      this.categories = data;
      console.log(this.categories);
    })
  }
  navigateToProducts(category: string): void {
    this.router.navigate(['/products-by-category', category]);
  }

} 


