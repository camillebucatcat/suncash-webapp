import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { CountryListComponent } from 'src/app/components/country-list/country-list.component';

@Component({
  selector: 'app-send-amount',
  templateUrl: './send-amount.page.html',
  styleUrls: ['./send-amount.page.scss'],
})
export class SendAmountPage implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: CountryListComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    await popover.present();
  }

}
