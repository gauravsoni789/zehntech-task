import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductDeatilComponent } from './product-view/product-detail.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDeatilComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
