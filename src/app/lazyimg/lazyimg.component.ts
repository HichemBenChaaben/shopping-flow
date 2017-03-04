import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lazyimg',
  templateUrl: './lazyimg.component.html',
  styleUrls: ['./lazyimg.component.css']
})
export class LazyimgComponent {

  @Input () pictureUrl;

  displayImage(ref) {
    ref.style.display = 'none';
  }
}
