import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class CountryListComponent implements OnInit {

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {}

    close() {
      this.popoverController.dismiss();
    }

}
