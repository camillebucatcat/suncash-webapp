import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditAddressPageRoutingModule } from './edit-address-routing.module';

import { EditAddressPage } from './edit-address.page';
import { InnerMenuComponentModule } from 'src/app/components/inner-menu/inner-menu.component.module';
import { InnerMenuComponent } from 'src/app/components/inner-menu/inner-menu.component';
import { InnerHeaderComponent } from 'src/app/components/inner-header/inner-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditAddressPageRoutingModule,
    InnerMenuComponentModule
  ],
  declarations: [
    EditAddressPage,
    InnerHeaderComponent
  ]
})
export class EditAddressPageModule {}
