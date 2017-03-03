import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";

@Injectable()
export class CheckoutService {

  constructor() {}

  // positng purshase data to the backened and returning the restult..
  post(data: any) {
    let response = {
        product: data.product.name,
        user: data.user.name
      };
    return Observable.of(new Object(response));
  }
}
