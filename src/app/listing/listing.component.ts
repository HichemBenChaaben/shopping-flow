import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

// pipes
import {TruncatePipe} from '../truncate.pipe';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
  providers: [ProductsService]
})
export class ListingComponent implements OnInit {
  route;
  products;
  catalog;
  isLoaded;
  _sub;
  constructor(route: ActivatedRoute, products: ProductsService) {
    this.route = route;
    this.products = products;
  }

  ngOnInit() {
    this.isLoaded = [];
    this._sub = this.products.get().subscribe(res => {
      this.catalog = res;
      console.log('___ this catalog _____ ', this.catalog);
    }, err => {
      console.log('error with the component');
    }, () => {
      console.log('operation complete');
    });
  }
  
  dosomething(event, ref, index) {
    // console.log('____something... function...', event.target, '___index___', index);
    ref.style.display = 'none';
    this.isLoaded[index] = true;
  }

  ngOnDestory() {
    this._sub.unsubscribe();
  }
}
