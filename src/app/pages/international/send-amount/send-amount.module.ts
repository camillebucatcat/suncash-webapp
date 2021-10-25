import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendAmountPageRoutingModule } from './send-amount-routing.module';

import { SendAmountPage } from './send-amount.page';
import { InnerHeaderComponent } from 'src/app/components/inner-header/inner-header.component';
import { InnerMenuComponentModule } from 'src/app/components/inner-menu/inner-menu.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendAmountPageRoutingModule,
    InnerMenuComponentModule
  ],
  declarations: [
    SendAmountPage,
    InnerHeaderComponent
  ]
})
export class SendAmountPageModule {}
