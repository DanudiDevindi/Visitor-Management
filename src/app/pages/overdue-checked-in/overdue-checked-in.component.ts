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
