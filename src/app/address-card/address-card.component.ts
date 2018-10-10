import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {
user: any;
@Input('name') userName: string;

  constructor() {
   
   }

  ngOnInit() {
    this.user = {
      desig:'Senior Actor',
      uname:this.userName,
      Org:'Film Industry',
      phone:[
        '2321-232-232',
        '2577-658-987'
      ]
    };
  }

}
