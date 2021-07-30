import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checked-in-visitors',
  templateUrl: './checked-in-visitors.component.html',
  styleUrls: ['./checked-in-visitors.component.scss']
})
export class CheckedInVisitorsComponent implements OnInit {

  constructor() { }

  visited = [
    {
        passnumber: '1236',
        checkedintime: '1.00 PM',
        nicpassport: '6912345621v',
        firstname:'Saman',
        lastname:'Silva',
        mobile:'0754563210',
        email:'saman@gmail.com',
        staffmembername:'Kasun',
    },
    {
      passnumber: '1212',
      checkedintime: '2.00 PM',
      nicpassport: '632145321v',
      firstname:'Sarasi',
      lastname:'Nirmani',
      mobile:'07721456322v',
      email:'sarasi23@gmail.com',
      staffmembername:'Pathum',
  },
  {
    passnumber: '5612',
    checkedintime: '9.00 AM',
    nicpassport: '8523145621v',
    firstname:'Poojani',
    lastname:'malavige',
    mobile:'0741235641',
    email:'pooji@gmail.com',
    staffmembername:'Rukshan',
},
{
  passnumber: '5632',
  checkedintime: '10.00 AM',
  nicpassport: '5623145621v',
  firstname:'Nimal',
  lastname:'Samaraweera',
  mobile:'0712335641',
  email:'nimal@gmail.com',
  staffmembername:'Sunil',
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
