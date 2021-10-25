import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddContactAddressPageRoutingModule } from './add-contact-address-routing.module';

import { AddContactAddressPage } from './add-contact-address.page';
import { InnerMenuComponentModule } from 'src/app/components/inner-menu/inner-menu.component.module';
import { InnerHeaderComponent } from 'src/app/components/inner-header/inner-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddContactAddressPageRoutingModule,
    InnerMenuComponentModule
  ],
  declarations: [
    AddContactAddressPage,
    InnerHeaderComponent
  ]
})
export class AddContactAddressPageModule {}
