import { Component, OnInit } from '@angular/core';
import {VisitorsService} from '../../service/visitors.service';
import {NotificationService} from '../../shared/util/notification.service';
import {Visitors} from '../../model/visitors';

@Component({
  selector: 'app-checked-out-visitors',
  templateUrl: './checked-out-visitors.component.html',
  styleUrls: ['./checked-out-visitors.component.scss']
})
export class CheckedOutVisitorsComponent implements OnInit {

  visitorsList : Visitors[];

  constructor(
    private visitorService : VisitorsService,
    private notificationService : NotificationService
  ) { }

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

  _getVisitorsList(){
   this.visitorService.getAllVisitors('',0).subscribe((data: Object[])=>{
     if (data['success']){
       this.visitorsList = data['body'].content;
     }else {
       this.notificationService.showError("Record not found","");
     }
   },error => {
     this.notificationService.showError("Record not found","");
   });
  }

}
