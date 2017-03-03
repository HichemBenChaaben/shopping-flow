import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {IProduct} from './product/product';

@Injectable()
export class ProductsService {
  private _productUrl =  './assets/mock.json';
  constructor(private http: Http) { }

  get():Observable <IProduct[]> {
    return this.http.get(this._productUrl)
      .map(res => res.json())
      .catch(this.handleError);
  }

  // getting 1 product
  getProduct(id: string):Observable <IProduct> {
    return this.http.get(this._productUrl)
      .map(res => res.json())
      .map(res => {
        return res.filter(item => item._id === id)[0];
      })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    let msg = `status code ${error} on url ${error.url}`;
    console.error(msg);
    return Observable.throw(msg);
  }
}
