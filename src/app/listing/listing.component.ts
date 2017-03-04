import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

// pipes
import { TruncatePipe } from '../truncate.pipe';

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
    }, err => {
      console.log('error with the component');
    });
  }


  displayImage(ref, index) {
    ref.style.display = 'none';
    this.isLoaded[index] = true;
  }

  ngOnDestory() {
    // this will stop receiving values from the observable
    this._sub.unsubscribe();
  }
}
