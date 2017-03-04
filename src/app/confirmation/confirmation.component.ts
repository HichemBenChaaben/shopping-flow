import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html'
})
export class ConfirmationComponent implements OnInit {

  router;
  user;
  product;
  constructor(router: ActivatedRoute) {
    this.router = router;
  }

  ngOnInit() {
    this.router.params.subscribe(res => {
      this.product = res.product;
      this.user = res.user;
    });
  }
}
