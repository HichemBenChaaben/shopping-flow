import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from './listing/listing.component';
import { ProductComponent } from './product/product.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: 'product/:id', component: ProductComponent },
  { path: 'checkout/:id', component: CheckoutComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: '', component: ListingComponent, pathMatch: 'full' },
  { path: '**', component: NotfoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
