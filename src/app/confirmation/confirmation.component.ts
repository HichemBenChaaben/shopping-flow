import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  router;
  user;
  product;
  constructor(router: ActivatedRoute) {
    this.router = router;
  }

  ngOnInit() {
    // console.log(activateRouter);
    this.router.params.subscribe(res => {
      console.log('results...', res);
      this.product = res.product;
      this.user = res.user;
    });
  }

}
