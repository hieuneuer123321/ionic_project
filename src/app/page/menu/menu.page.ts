import { Component, OnInit } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  title = 'Home';
  menuItems = [
    {
      title: 'Home',
      icon: 'home',
      path: '/',
    },
    {
      title: 'Booking',
      icon: 'list',
      path: '/Booking',
    },
    {
      title: 'Management',
      icon: 'information',
      path: '/Management',
    },
    {
      title: 'Report',
      icon: 'report',
      path: '/Report',
    },
    {
      title: 'Service',
      icon: 'service',
      path: '/Service',
    },
  ];
  constructor(private menuCtrl: MenuController, private plt: Platform) {}
  // constructor(private menuCtrl: MenuController) {}
  setTitle(title) {
    this.title = title;
  }
  ngOnInit() {}
}
