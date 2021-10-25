import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { InnerMenuComponentModule } from 'src/app/components/inner-menu/inner-menu.component.module';
import { InnerHeaderComponent } from 'src/app/components/inner-header/inner-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    InnerMenuComponentModule,
  ],
  declarations: [
    HomePage,
    InnerHeaderComponent
  ]
})
export class HomePageModule {}
