import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  option = {
    // freeMode: true,
    slidesPerView: 3.5,
    slidesOffsetBefore: 11,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
  };
  constructor() {}
}
