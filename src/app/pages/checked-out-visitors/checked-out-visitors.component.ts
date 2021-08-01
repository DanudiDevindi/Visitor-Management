import { Component, OnInit } from '@angular/core';
import {VisitorsService} from '../../service/visitors.service';
import {NotificationService} from '../../shared/util/notification.service';
import {Visitors} from '../../model/visitors';
import {CheckedVisitors} from '../../model/checked-visitors';
import {VisitService} from '../../service/visit.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-checked-out-visitors',
  templateUrl: './checked-out-visitors.component.html',
  styleUrls: ['./checked-out-visitors.component.scss'],
  providers: [DatePipe]
})
export class CheckedOutVisitorsComponent implements OnInit {


  myDate = (new Date().getMonth() + 1) + "/01/" + new Date().getFullYear();
  lastDate = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
  constructor(
    private datePipe : DatePipe,
    private visitorService : VisitService,
    private notificationService : NotificationService
  ) {
    this.fromDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    this.toDate = this.datePipe.transform(this.lastDate,'yyyy-MM-dd');
  }

  checkoutVisitors : CheckedVisitors[];
  fromDate : string;
  toDate : string;
  customSearchText : string;

  visited = [
    {
        passnumber: '1654',
        checkedintime: '1.20 PM',
        nicpassport: '651235412v',
        firstname:'Kamal',
        lastname:'Perera',
        mobile:'0751234569',
        email:'kamal@gmail.com',
        staffmembername:'Nimal',
        designation:'PM',
    },
    {
      passnumber: '2541',
      checkedintime: '8.30 AM',
      nicpassport: '5412365412v',
      firstname:'Amal',
      lastname:'Fernando',
      mobile:'07712345630',
      email:'amal@gmail.com',
      staffmembername:'Srimal',
      designation:'Manager',
  },
  {
    passnumber: '1215',
    checkedintime: '9.00 AM',
    nicpassport: '8563214562v',
    firstname:'Thisara',
    lastname:'Silva',
    mobile:'0712345698',
    email:'rhi@gmail.com',
    staffmembername:'Kasun',
    designation:'Ass.Manager',
},
{
  passnumber: '6975',
  checkedintime: '9.00 AM',
  nicpassport: '8563568741v',
  firstname:'Kamal',
  lastname:'Zoisa',
  mobile:'0712312348',
  email:'kmal@gmail.com',
  staffmembername:'Kasun',
  designation:'Ass.Manager',
},
{
  passnumber: '8756',
  checkedintime: '10.00 AM',
  nicpassport: '4563568741v',
  firstname:'Ashan',
  lastname:'Perera',
  mobile:'0775485238',
  email:'Ashl@gmail.com',
  staffmembername:'Sunil',
  designation:'Clark',
},
{
  passnumber: '5756',
  checkedintime: '1.00 PM',
  nicpassport: '96363568741v',
  firstname:'Pawani',
  lastname:'Perera',
  mobile:'0755485238',
  email:'PWani@gmail.com',
  staffmembername:'Sunil',
  designation:'Clark',
},
{
  passnumber: '8963',
  checkedintime: '11.00 AM',
  nicpassport: '78363568741v',
  firstname:'Pathum',
  lastname:'Silva',
  mobile:'07895485238',
  email:'pthum12@gmail.com',
  staffmembername:'Ranil',
  designation:'BA',
},
{
  passnumber: '5963',
  checkedintime: '1.00 PM',
  nicpassport: '56363568741v',
  firstname:'Sarath',
  lastname:'Silva',
  mobile:'07625485238',
  email:'sara12@gmail.com',
  staffmembername:'Ranil',
  designation:'BA',
},



  ]
  pageOfItems: Array<any>;
 onChangePage(pageOfItems: Array<any>) {
  // update current page of items
  this.pageOfItems = pageOfItems;
}

  ngOnInit() {
   this._getVisitorHistory();
  }

  _getVisitorHistory(){
   this.visitorService.getVisitCheckingHistory('',this.fromDate,this.toDate).subscribe((data)=>{
     if (data['success']){
       this.checkoutVisitors = data['body'].content;
     }else {
       this.notificationService.showError("Record not found","");
     }
   },error => {
     this.notificationService.showError(error['msg'], "")
   });
  }

  _customSearch(){
   if (this.fromDate !== undefined && this.toDate !== undefined || this.customSearchText !== undefined || this.customSearchText !== ''){
     this.visitorService.getVisitCheckingHistory(this.customSearchText,this.fromDate,this.toDate).subscribe((data)=>{
       if (data['success']){
         this.checkoutVisitors = data['body'].content;
       }else {
         this.notificationService.showError("Record not found","");
       }
     },error => {
       this.notificationService.showError(error['msg'], "")
     });
   }else {
     this._getVisitorHistory();
   }
  }

}
