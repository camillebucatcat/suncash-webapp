import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'international',
    loadChildren: () => import('./pages/international/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'send',
    loadChildren: () => import('./pages/international/send/send.module').then( m => m.SendPageModule)
  },
  {
    path: 'send-amount',
    loadChildren: () => import('./pages/international/send-amount/send-amount.module').then( m => m.SendAmountPageModule)
  },
  {
    path: 'add-contact',
    loadChildren: () => import('./pages/contacts/add-contact/add-contact.module').then( m => m.AddContactPageModule)
  },
  {
    path: 'add-contact-address',
    loadChildren: () => import('./pages/contacts/add-contact-address/add-contact-address.module').then( m => m.AddContactAddressPageModule)
  },
  {
    path: 'personal-details',
    loadChildren: () => import('./pages/personal-details/personal-details.module').then( m => m.PersonalDetailsPageModule)
  },
  {
    path: 'edit-address',
    loadChildren: () => import('./pages/personal/edit-address/edit-address.module').then( m => m.EditAddressPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
