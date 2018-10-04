import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {
user: any;
  constructor() {
    this.user = {
      desig:'Senior Actor',
      name:'Amitabh Bachchan',
      Org:'Film Industry',
      phone:[
        '2321-232-232',
        '2577-658-987'
      ]
    };
   }

  ngOnInit() {
  }

}
