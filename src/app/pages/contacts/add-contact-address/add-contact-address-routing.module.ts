import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddContactAddressPage } from './add-contact-address.page';

const routes: Routes = [
  {
    path: '',
    component: AddContactAddressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddContactAddressPageRoutingModule {}
