import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddContactAddressPageRoutingModule } from './add-contact-address-routing.module';

import { AddContactAddressPage } from './add-contact-address.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddContactAddressPageRoutingModule
  ],
  declarations: [AddContactAddressPage]
})
export class AddContactAddressPageModule {}
