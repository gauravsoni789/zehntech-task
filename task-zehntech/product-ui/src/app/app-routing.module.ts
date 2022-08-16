import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './gaurd/auth.guard';
import { PreventLoginAccessGuard } from './gaurd/prevent-login-access.guard';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDeatilComponent } from './product/product-view/product-detail.component';

const routes: Routes = [
  { path: '', canActivate: [AuthGuard], component: ProductListComponent },
  { path: 'detail', canActivate: [AuthGuard], component: ProductDeatilComponent },
  { path: 'login', canActivate: [PreventLoginAccessGuard], component: LoginComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
