import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendPageRoutingModule } from './send-routing.module';

import { SendPage } from './send.page';
import { InnerMenuComponentModule } from 'src/app/components/inner-menu/inner-menu.component.module';
import { InnerHeaderComponent } from 'src/app/components/inner-header/inner-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendPageRoutingModule,
    InnerMenuComponentModule
  ],
  declarations: [
    SendPage,
    InnerHeaderComponent
  ]
})
export class SendPageModule {}
