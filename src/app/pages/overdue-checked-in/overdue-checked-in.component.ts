import { Component, OnInit } from '@angular/core';
import {VisitService} from '../../service/visit.service';
import {NotificationService} from '../../shared/util/notification.service';
import {CheckedVisitors} from '../../model/checked-visitors';

@Component({
  selector: 'app-overdue-checked-in',
  templateUrl: './overdue-checked-in.component.html',
  styleUrls: ['./overdue-checked-in.component.scss']
})
export class OverdueCheckedInComponent implements OnInit {

  constructor(
    private visitService : VisitService,
    private notificationService : NotificationService
  ) { }

  overDueCheckList : CheckedVisitors[];
  customSearchText : string;

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
   this._getOverDueCheckedVisitors();
  }

  _getOverDueCheckedVisitors(){
    this.visitService.getOverDueList('',0).subscribe((data)=>{
        if (data['success']){
          this.overDueCheckList = data['body'].content;
        }else {
          this.notificationService.showError("Record not found!","");
        }
      },
      error => {
        this.notificationService.showError("Record not found!","");
      });
  }

  _checkOut(visitId){
    this.visitService.checkOut(visitId).subscribe((data)=>{
      if (data['success']){
        this.notificationService.showSuccess("Visitor Check out success","");
      }else {
        this.notificationService.showError("Record not found!","");
      }
    },error => {
      this.notificationService.showError("Record not found!","");
    })
  }

  _customSearch(){
   if (this.customSearchText !== ''){
     this.visitService.getOverDueList('',0).subscribe((data)=>{
         if (data['success']){
           this.overDueCheckList = data['body'].content;
         }else {
           this.notificationService.showError("Record not found!","");
         }
       },
       error => {
         this.notificationService.showError("Record not found!","");
       });
   }else{
     this._getOverDueCheckedVisitors();
   }

  }


}
