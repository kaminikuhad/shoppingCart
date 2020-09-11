import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';

const routes: Routes = [{
  path: 'product', component: ProductComponent,
}, {
  path: 'productDetails',
  component: ProductDetailsComponent,

},
{ path: '', redirectTo: '/product', pathMatch: 'full' },
{ path: '**', component: ProductComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
