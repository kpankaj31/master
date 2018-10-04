import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  message : string ;
  constructor() { 
   setInterval( ()=>{
    let currentDate = new Date();
   this.message = currentDate.toDateString() + ' ' + currentDate.toTimeString();

   },1000);
  }

  ngOnInit() {
  }

}
