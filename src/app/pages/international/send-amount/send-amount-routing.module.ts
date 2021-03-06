import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendAmountPage } from './send-amount.page';

const routes: Routes = [
  {
    path: '',
    component: SendAmountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendAmountPageRoutingModule {}
