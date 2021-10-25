import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddContactPageRoutingModule } from './add-contact-routing.module';

import { AddContactPage } from './add-contact.page';
import { InnerMenuComponentModule } from 'src/app/components/inner-menu/inner-menu.component.module';
import { InnerHeaderComponent } from 'src/app/components/inner-header/inner-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddContactPageRoutingModule,
    InnerMenuComponentModule
  ],
  declarations: [
    AddContactPage,
    InnerHeaderComponent
  ]
})
export class AddContactPageModule {}
