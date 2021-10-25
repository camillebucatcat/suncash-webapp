import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalDetailsPageRoutingModule } from './personal-details-routing.module';

import { PersonalDetailsPage } from './personal-details.page';
import { InnerMenuComponentModule } from 'src/app/components/inner-menu/inner-menu.component.module';
import { InnerMenuComponent } from 'src/app/components/inner-menu/inner-menu.component';
import { InnerHeaderComponent } from 'src/app/components/inner-header/inner-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalDetailsPageRoutingModule,
    InnerMenuComponentModule
  ],
  declarations: [
    PersonalDetailsPage,
    InnerHeaderComponent
  ]
})
export class PersonalDetailsPageModule {}
