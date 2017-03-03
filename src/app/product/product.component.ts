import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { IProduct } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductsService]
})
export class ProductComponent implements OnInit {
  route;
  sub;
  products: any;
  details;
  _product;
  constructor(route: ActivatedRoute, products: ProductsService) {
    this.route = route;
    this.products = products;
  }

  ngOnInit() {
    this._product = {};
    /// or you can do
    /// let id = this.route.snapshot['id]
    console.log('the id of this thing is....', this.route.snapshot['id']);
    this.sub = this.route.params.subscribe(params => {
      let id = params.id;
      this.details = this.products.get();
      this.products.get().subscribe(res => {
        this._product = res.filter(item => item._id === id)[0];
      });
    });
  }

  ngOnDestroy() {
    this.route.params.unsubscribe();
    this.sub.unsubscribe();
  }

}
