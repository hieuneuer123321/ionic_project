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
  /// trong vòng đời hàm ionViewDidEnter sẽ chạy khi router tới trang đó
  async ionViewDidEnter() {
    let newIndex = await this.slides.getActiveIndex(); // getActiveIndex trả về số promise index của trang hiện tại trên slider
    newIndex++;
    // Workaround to make it work: breaks the animation
    this.slides.slideTo(newIndex, 0, false);
  }
  ngOnInit() {}
  load() {
    setInterval(() => {
      this.slides.slideNext(1000);
    }, 1000);
  }
}
