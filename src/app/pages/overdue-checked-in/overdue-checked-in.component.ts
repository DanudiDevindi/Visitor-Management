import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overdue-checked-in',
  templateUrl: './overdue-checked-in.component.html',
  styleUrls: ['./overdue-checked-in.component.scss']
})
export class OverdueCheckedInComponent implements OnInit {

  constructor() { }

  visited = [
    {
        passnumber: '1212',
        checkedintime: '3.30 PM',
        nicpassport: '893256412v',
        firstname:'Sumal',
        lastname:'Silva',
        mobile:'0781234569',
        email:'sumal25@gmail.com',
        staffmembername:'Kamal',
    },
  

  ]
  pageOfItems: Array<any>;
 onChangePage(pageOfItems: Array<any>) {
  // update current page of items
  this.pageOfItems = pageOfItems;
}

  ngOnInit() {
  }

}
