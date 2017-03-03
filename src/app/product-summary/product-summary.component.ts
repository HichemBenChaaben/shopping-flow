import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-summary',
  templateUrl: './product-summary.component.html',
  styleUrls: ['./product-summary.component.css']
})
export class ProductSummaryComponent {

  @Input() productName: string;
  @Input() productPrice: string;
  @Input() productImage: string;

}
