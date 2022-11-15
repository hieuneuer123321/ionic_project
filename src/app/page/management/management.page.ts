import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-management',
  templateUrl: './management.page.html',
  styleUrls: ['./management.page.scss'],
})
export class ManagementPage implements OnInit {
  option = {
    freeMode: true,
    slidesPerView: 3.5,
    slidesOffsetBefore: 11,
    spaceBetween: 10,
  };
  constructor() {}

  ngOnInit() {}
}
