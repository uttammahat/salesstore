import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAccountComponent } from './my-account.component';

const routes: Routes = [
  {
    path: '',
    component: MyAccountComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./user-profile/user-profile.module').then(m => m.UserProfileModule)
      },
      {
        path: 'profile-edit',
        loadChildren: () => import('./profile-edit/profile-edit.module').then(m => m.ProfileEditModule)
      },
      {
        path: 'change-password',
        loadChildren: () => import('./change-password/change-password.module').then(m => m.ChangePasswordModule)
      },
      {
        path: 'order-history',
        loadChildren: () => import('./order-history/order-history.module').then(m => m.OrderHistoryModule)
      },
      {
        path: 'order-detail',
        loadChildren: () => import('./order-detail/order-detail.module').then(m => m.OrderDetailModule)
      },
      {
        path: 'tickets',
        loadChildren: () => import('./tickets/tickets.module').then(m => m.TicketsModule)
      },
      {
        path: 'add-ticket',
        loadChildren: () => import('./add-ticket/add-ticket.module').then(m => m.AddTicketModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyAccountRoutingModule { }
