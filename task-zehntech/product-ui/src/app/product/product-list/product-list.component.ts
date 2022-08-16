import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Category } from '../models/category.interface';
import { Product } from '../models/product.interface';
import { ProductService } from '../product-service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  public allProduct: Product[] = [];
  public categories: Category[] = [];
  public category: FormControl = new FormControl({});
  public products: Product[] = [];

  private sub: Subscription  = new Subscription();

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) { }

  public ngOnInit(): void {
    this.getProductsAndCategoreis();
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public logout(): void {
    localStorage.clear();
    this.router.navigate(['login'])
  }

  public navigateToProductDetail(product: Product) {
    this.router.navigate(
      ['detail'],
      {
        queryParams: {
          catId: product.categoryId,
          proId: product.id
        }
    });
  }

  private getCategories(): void {
    this.sub.add(this.productService.getCategories()
      .subscribe((res: Category[]) => {
      this.categories = res;
      this.activateRoute.queryParams.subscribe(params => {
        const cat: Category | undefined = params && params.catId
          ? this.categories.find((c: Category) => c.id === Number(params.catId))
          : this.categories[0];
        this.category.patchValue(cat?.id);
      });
    }, (error: HttpErrorResponse)=> { console.log('error', error)}));
  }

  private getProducts(): void {
    this.sub.add(this.productService.getProducts()
      .subscribe((res: Product[]) => {
      this.products = res;
      this.allProduct = res;
      if (this.category.value) { this.updateProductList(this.category.value); }
      this.category.valueChanges.pipe().subscribe((val: number) => {
        if(val) {
          this.updateProductList(Number(this.category.value));
          this.router.navigate([''], { queryParams: { catId: val } });
        }
      });
    }, (error: HttpErrorResponse)=> { console.log('error', error)}));
  }

  private getProductsAndCategoreis(): void {
    this.getCategories();
    this.getProducts();
  }

  private updateProductList(val: number): void {
    this.products = this.allProduct.filter((product: Product) =>
      product.categoryId === val);
  }

}
