import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () =>
  //     import('./page/home/home.module').then((m) => m.HomePageModule),
  // },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'booking',
  //   loadChildren: () =>
  //     import('./page/booking/booking.module').then((m) => m.BookingPageModule),
  // },
  // {
  //   path: 'management',
  //   loadChildren: () =>
  //     import('./page/management/management.module').then(
  //       (m) => m.ManagementPageModule
  //     ),
  // },
  // {
  //   path: 'report',
  //   loadChildren: () =>
  //     import('./page/report/report.module').then((m) => m.ReportPageModule),
  // },
  // {
  //   path: 'service',
  //   loadChildren: () =>
  //     import('./page/service/service.module').then((m) => m.ServicePageModule),
  // },
  {
    path: '',
    loadChildren: () =>
      import('./page/menu/menu.module').then((m) => m.MenuPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
