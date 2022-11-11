import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../../page/home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'booking',
        loadChildren: () =>
          import('../../page/booking/booking.module').then(
            (m) => m.BookingPageModule
          ),
      },
      {
        path: 'management',
        loadChildren: () =>
          import('../../page/management/management.module').then(
            (m) => m.ManagementPageModule
          ),
      },
      {
        path: 'report',
        loadChildren: () =>
          import('../../page/report/report.module').then(
            (m) => m.ReportPageModule
          ),
      },
      {
        path: 'service',
        loadChildren: () =>
          import('../../page/service/service.module').then(
            (m) => m.ServicePageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
