import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checked-out-visitors',
  templateUrl: './checked-out-visitors.component.html',
  styleUrls: ['./checked-out-visitors.component.scss']
})
export class CheckedOutVisitorsComponent implements OnInit {

  constructor() { }

  visited = [
    {
        passnumber: '1212',
        checkedintime: '511515151',
        nicpassport: '455454545',
        firstname:'ehghfbf',
        lastname:'ehjddd',
        mobile:'545454',
        email:'dhdkjhjdkhd',
        staffmembername:'dfhuhff',
        designation:'dededd',
    },
    {
      passnumber: '1212',
      checkedintime: '511515151',
      nicpassport: '455454545',
      firstname:'ehghfbf',
      lastname:'ehjddd',
      mobile:'545454',
      email:'dhdkjhjdkhd',
      staffmembername:'dfhuhff',
      designation:'dededd',
  },
  {
    passnumber: '1212',
    checkedintime: '511515151',
    nicpassport: '455454545',
    firstname:'ehghfbf',
    lastname:'ehjddd',
    mobile:'545454',
    email:'dhdkjhjdkhd',
    staffmembername:'dfhuhff',
    designation:'dededd',
},
{
  passnumber: '1212',
  checkedintime: '511515151',
  nicpassport: '455454545',
  firstname:'ehghfbf',
  lastname:'ehjddd',
  mobile:'545454',
  email:'dhdkjhjdkhd',
  staffmembername:'dfhuhff',
  designation:'dededd',
},
{
  passnumber: '1212',
  checkedintime: '511515151',
  nicpassport: '455454545',
  firstname:'ehghfbf',
  lastname:'ehjddd',
  mobile:'545454',
  email:'dhdkjhjdkhd',
  staffmembername:'dfhuhff',
  designation:'dededd',
},
{
  passnumber: '1212',
  checkedintime: '511515151',
  nicpassport: '455454545',
  firstname:'ehghfbf',
  lastname:'ehjddd',
  mobile:'545454',
  email:'dhdkjhjdkhd',
  staffmembername:'dfhuhff',
  designation:'dededd',
},
{
  passnumber: '1212',
  checkedintime: '511515151',
  nicpassport: '455454545',
  firstname:'ehghfbf',
  lastname:'ehjddd',
  mobile:'545454',
  email:'dhdkjhjdkhd',
  staffmembername:'dfhuhff',
  designation:'dededd',
},
{
  passnumber: '1212',
  checkedintime: '511515151',
  nicpassport: '455454545',
  firstname:'ehghfbf',
  lastname:'ehjddd',
  mobile:'545454',
  email:'dhdkjhjdkhd',
  staffmembername:'dfhuhff',
  designation:'dededd',
},
{
  passnumber: '1212',
  checkedintime: '511515151',
  nicpassport: '455454545',
  firstname:'ehghfbf',
  lastname:'ehjddd',
  mobile:'545454',
  email:'dhdkjhjdkhd',
  staffmembername:'dfhuhff',
  designation:'dededd',
},
{
  passnumber: '1212',
  checkedintime: '511515151',
  nicpassport: '455454545',
  firstname:'ehghfbf',
  lastname:'ehjddd',
  mobile:'545454',
  email:'dhdkjhjdkhd',
  staffmembername:'dfhuhff',
  designation:'dededd',
},
{
  passnumber: '1212',
  checkedintime: '511515151',
  nicpassport: '455454545',
  firstname:'ehghfbf',
  lastname:'ehjddd',
  mobile:'545454',
  email:'dhdkjhjdkhd',
  staffmembername:'dfhuhff',
  designation:'dededd',
},
{
  passnumber: '1212',
  checkedintime: '511515151',
  nicpassport: '455454545',
  firstname:'ehghfbf',
  lastname:'ehjddd',
  mobile:'545454',
  email:'dhdkjhjdkhd',
  staffmembername:'dfhuhff',
  designation:'dededd',
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
