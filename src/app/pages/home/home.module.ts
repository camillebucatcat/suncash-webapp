import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { InnerHeaderComponent } from 'src/app/components/inner-header/inner-header.component';
import { AppModule } from 'src/app/app.module';
import { InnerMenuComponent } from 'src/app/components/inner-menu/inner-menu.component';
import { InnerMenuComponentModule } from 'src/app/components/inner-menu/inner-menu.component.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    InnerMenuComponentModule
  ],
  declarations: [
    HomePage,
    InnerHeaderComponent,
  ],
})
export class HomePageModule {}
