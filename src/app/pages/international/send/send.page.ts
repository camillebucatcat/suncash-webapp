import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send',
  templateUrl: './send.page.html',
  styleUrls: ['./send.page.scss'],
})
export class SendPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  openPage(path) {
    this.router.navigate([path]);
  }

}
