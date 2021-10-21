import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendAmountPageRoutingModule } from './send-amount-routing.module';

import { SendAmountPage } from './send-amount.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendAmountPageRoutingModule
  ],
  declarations: [SendAmountPage]
})
export class SendAmountPageModule {}
