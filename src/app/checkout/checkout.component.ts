import { Component, OnInit, Input, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  providers: [ProductsService, CheckoutService]
})
export class CheckoutComponent implements OnInit {
  _product = {};
  products;
  submitted = false;
  model = {};
  checkout;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, products: ProductsService, checkout: CheckoutService) {
    this.activatedRoute = activatedRoute;
    this.products = products;
    this.router = router;
    this.checkout = checkout;
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      let { id } = params;
      this.getProduct(id);
    });
  }

  // get one product at a time from the service
  getProduct(id) {
    this.products.getProduct(id).subscribe(res => {
      this._product = res;
    });
  }

  doCheckout(event) {
    let purshase = {
      user: {},
      product: {}
    };
    Object.assign(purshase.user, this.model);
    Object.assign(purshase.product, this._product);

    // send this to a service
    this.checkout.post(purshase).subscribe(res => {
      if (res) {
        this.router.navigate(['/confirmation', { product: res.product, user: res.user }]);
      }
    });
  }
}
