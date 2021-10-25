import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InnerHeaderComponent } from './components/inner-header/inner-header.component';
import { InnerMenuComponent } from './components/inner-menu/inner-menu.component';
import { InnerMenuComponentModule } from './components/inner-menu/inner-menu.component.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  entryComponents: [
    
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, InnerMenuComponentModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },],
  bootstrap: [AppComponent],
})
export class AppModule {}
