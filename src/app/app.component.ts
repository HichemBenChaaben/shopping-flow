import { Component } from '@angular/core';

@Component({
  moduleId: this.module,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  products = [
    {
      'name': 'p1209123j',
      'price': '230euro',
      'discount': 20
    },
    {
      'name': 'kqwjdpjqwd9812ep1209123j',
      'price': '230euro',
      'discount': 20
    },
    {
      'name': 'pp1209123j123kk',
      'price': '230euro',
      'discount': 20
    },
    {
      'name': 'p1209123j19u2312e012e',
      'price': '230euro',
      'discount': 20
    }
  ];
}
