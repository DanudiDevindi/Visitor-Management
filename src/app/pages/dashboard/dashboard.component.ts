import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../../service/dashboard.service';
import {NotificationService} from '../../shared/util/notification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  checkinCount : number;
  visitCount : number;
  checkoutCount : number;
  overDueCount : number;

  constructor(
    private dashboardService : DashboardService,
    private notificationService : NotificationService
  ) { }

  ngOnInit() {
    this._getDashboardDetails();
  }

  _getDashboardDetails(){
    this.dashboardService.getDashboardData().subscribe((data)=>{
      if (data['success']){
        console.log(data['body']);
        this.overDueCount = data['body'].overdue;
        this.checkinCount = data['body'].checkin;
        this.visitCount = data['body'].visitor;
        this.checkoutCount = data['body'].visits;
      }else{
        this.notificationService.showError("Records not found","");
      }
    },error => {
      this.notificationService.showError(error['msg'], "")    })
  }

}
