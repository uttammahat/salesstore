import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCategoryRoutingModule } from './product-category-routing.module';
import { ProductCategoryComponent } from './product-category.component';
import { FormsModule } from '@angular/forms';
import { IvyCarouselModule } from 'angular-responsive-carousel';


@NgModule({
  declarations: [ProductCategoryComponent],
  imports: [
    CommonModule,
    ProductCategoryRoutingModule,
    FormsModule,
    IvyCarouselModule,
  ]
})
export class ProductCategoryModule { }
