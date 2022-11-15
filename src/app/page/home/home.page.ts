import { Component } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('mySlider') slides: IonSlides;
  // @ViewChild('mySlider') slides: IonSlides;
  option = {
    // freeMode: true,
    zoom: false,
    slidesPerView: 3.5,
    slidesOffsetBefore: 11,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay: 5000,
    speed: 500,
  };
  constructor() {}
  ngOnInit() {
    setInterval(() => {
      this.slides.slideNext(1000);
    }, 1000);
  }
}
