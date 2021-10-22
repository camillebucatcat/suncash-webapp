import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { CountryListComponent } from 'src/app/components/country-list/country-list.component';

@Component({
  selector: 'app-add-contact-address',
  templateUrl: './add-contact-address.page.html',
  styleUrls: ['./add-contact-address.page.scss'],
})
export class AddContactAddressPage implements OnInit {

  constructor(private popoverController: PopoverController) { }

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
