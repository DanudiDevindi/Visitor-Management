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
        passnumber: '1212',
        checkedintime: '511515151',
        nicpassport: '455454545',
        firstname:'ehghfbf',
        lastname:'ehjddd',
        mobile:'545454',
        email:'dhdkjhjdkhd',
        staffmembername:'dfhuhff',
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
