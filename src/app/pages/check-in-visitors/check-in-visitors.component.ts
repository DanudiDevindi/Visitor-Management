import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-in-visitors',
  templateUrl: './check-in-visitors.component.html',
  styleUrls: ['./check-in-visitors.component.scss']
})
export class CheckInVisitorsComponent implements OnInit {

  constructor() { }


  visit = [

    {
        firstName: 'Ajdjncjnv',
        nicPassport: '511515151',
        mobile: '455454545',
    },
    {
      firstName: 'Ajdjncjnv',
      nicPassport: '511515151',
      mobile: '455454545',
  },
  {
    firstName: 'Ajdjncjnv',
    nicPassport: '511515151',
    mobile: '455454545',
},
{
  firstName: 'Ajdjncjnv',
  nicPassport: '511515151',
  mobile: '455454545',
},
{
  firstName: 'Ajdjncjnv',
  nicPassport: '511515151',
  mobile: '455454545',
},
{
  firstName: 'Ajdjncjnv',
  nicPassport: '511515151',
  mobile: '455454545',
},
{
  firstName: 'Ajdjncjnv',
  nicPassport: '511515151',
  mobile: '455454545',
},
{
  firstName: 'Ajdjncjnv',
  nicPassport: '511515151',
  mobile: '455454545',
},
{
  firstName: 'Ajdjncjnv',
  nicPassport: '511515151',
  mobile: '455454545',
},
{
  firstName: 'Ajdjncjnv',
  nicPassport: '511515151',
  mobile: '455454545',
},
{
  firstName: 'Ajdjncjnv',
  nicPassport: '511515151',
  mobile: '455454545',
},
{
  firstName: 'Ajdjncjnv',
  nicPassport: '511515151',
  mobile: '455454545',
},
{
  firstName: 'Ajdjncjnv',
  nicPassport: '511515151',
  mobile: '455454545',
},
{
  firstName: 'Ajdjncjnv',
  nicPassport: '511515151',
  mobile: '455454545',
},
{
  firstName: 'Ajdjncjnv',
  nicPassport: '511515151',
  mobile: '455454545',
},

 ];


 pageOfItems: Array<any>;
 onChangePage(pageOfItems: Array<any>) {
  // update current page of items
  this.pageOfItems = pageOfItems;
}

  ngOnInit() {
  }

}
