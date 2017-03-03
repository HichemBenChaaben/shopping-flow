import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

// declarations
import { ProductComponent } from './product/product.component';
import { ListingComponent } from './listing/listing.component';
import { AppRoutingModule } from './app.routing.module';
import { ConfirmationComponent } from './confirmation/confirmation.component';

// providers
import { ProductsService } from './products.service';
import { CheckoutComponent } from './checkout/checkout.component';
import { TruncatePipe } from './truncate.pipe';
import { ProductSummaryComponent } from './product-summary/product-summary.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ListingComponent,
    ConfirmationComponent,
    CheckoutComponent,
    TruncatePipe,
    ProductSummaryComponent,
    NotfoundComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    RouterModule,
    AppRoutingModule
  ],
  exports: [RouterModule],
  providers: [ProductsService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
