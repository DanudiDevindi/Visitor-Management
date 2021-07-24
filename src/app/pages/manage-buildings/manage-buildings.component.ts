import { Component, OnInit } from '@angular/core';
import {Building} from '../../model/building';
import {BuildingServiceService} from '../../service/building-service.service';
import {NotificationService} from '../../shared/util/notification.service';

@Component({
  selector: 'app-manage-buildings',
  templateUrl: './manage-buildings.component.html',
  styleUrls: ['./manage-buildings.component.scss']
})
export class ManageBuildingsComponent implements OnInit {

  buildingList : Building[];

  buildingName : string;

  updateBuildingId : string;
  updateBuildingName : string;
  updateBuildingStatus : string;

  constructor(
    private buildingService : BuildingServiceService,
    private notificationService : NotificationService
  ) { }
  visited = [
    {
        title: 'ebfhbfhf',
        address: 'dehyuehfuhfu',
        tel: '2323232',
        email:'eygfygyf',


      },

  ]

  public show:boolean = false;
  public hide:boolean=true;
  toggle() {
    this.show = !this.show;
    this.hide = !this.hide;
  }


  pageOfItems: Array<any>;
 onChangePage(pageOfItems: Array<any>) {
  // update current page of items
  this.pageOfItems = pageOfItems;
}


  ngOnInit() {
   this._getBuildingList();
  }

  _getBuildingList(){
   this.buildingService.getBuildingList().subscribe((data: Object[])=>{
     if (data['success']){
       this.buildingList = data['body'];
       console.log(this.buildingList);
     }else {
       this.notificationService.showError("Record not found","");
     }
   },error => {
     this.notificationService.showError("Record not found","");
   })
  }

  _createBuilding(){
   if (this.buildingName !== ''){
     let data = {
       buildingId : 0,
       name : this.buildingName,
       status : "ACTIVE"
     }
     this.buildingService.createBuilding(data).subscribe((data)=>{
       this.notificationService.showSuccess("Building added success!","");
     },error => {
       this.notificationService.showError("Building added failed!","");
     })
   }else{
     this.notificationService.showError("Building name is required!","");
   }
  }

  _loadBuildingDetails(id,name,status){
   this.updateBuildingId = id;
   this.updateBuildingName = name;
   this.updateBuildingStatus = status;
  }

}
