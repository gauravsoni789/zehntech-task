import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../models/product.interface';
import { ProductService } from '../product-service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDeatilComponent implements OnInit, OnDestroy {

  public product: Product | null = null;

  private sub: Subscription  = new Subscription();

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private productService: ProductService
  ) { }

  public ngOnInit(): void {
    this.getProduct();
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public logout(): void {
    localStorage.clear();
    this.router.navigate(['login'])
  }

  public navigateToCategory(product: Product | undefined): void {
    this.router.navigate(['../'], {queryParams: { catId: product?.categoryId }});
  }

  private getProduct(): void {
    this.sub.add(
      this.activateRoute.queryParams.subscribe(params => {
        const proId = Number(params.proId);
        this.productService.getProductDetails(proId).subscribe((res: any) => {
          this.product = JSON.parse(JSON.stringify(res));
        }, (error: HttpErrorResponse)=> { console.log('error', error)});
    }));
  }
}
