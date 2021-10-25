import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { InnerHeaderComponent } from 'src/app/components/inner-header/inner-header.component';
import { AppModule } from 'src/app/app.module';
import { InnerMenuComponent } from 'src/app/components/inner-menu/inner-menu.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [
    InnerMenuComponent,
  ],
  exports: [
    InnerMenuComponent

  ]
})
export class InnerMenuComponentModule {}
