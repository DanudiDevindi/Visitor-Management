import {Component, OnInit, ViewChild} from '@angular/core';
import {Building} from '../../model/building';
import {BuildingServiceService} from '../../service/building-service.service';
import {NotificationService} from '../../shared/util/notification.service';
import {FloorService} from '../../service/floor.service';
import {ModalComponent} from "../../modalview/modal.component";

@Component({
  selector: 'app-manage-buildings',
  templateUrl: './manage-buildings.component.html',
  styleUrls: ['./manage-buildings.component.scss']
})
export class ManageBuildingsComponent implements OnInit {

  buildingList: Building[];
  @ViewChild(`addempl`,{static: false})
  public addempl: ModalComponent
  buildingName: string;

  updateBuildingId: string;
  updateBuildingName: string;
  updateBuildingStatus: string;

  floorBuildingId: number;

  active: boolean;

  floorName: string;

  constructor(
    private buildingService: BuildingServiceService,
    private floorService: FloorService,
    private notificationService: NotificationService
  ) {
  }

  visited = [
    {
      title: 'ebfhbfhf',
      address: 'dehyuehfuhfu',
      tel: '2323232',
      email: 'eygfygyf',


    },

  ]

  public show: boolean = false;
  public hide: boolean = true;

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

  _getBuildingList() {
    this.buildingService.getBuildingList().subscribe((data: Object[]) => {
      if (data['success']) {
        this.buildingList = data['body'];
      } else {
        this.notificationService.showError("Record not found", "");
      }
    }, error => {
      this.notificationService.showError("Record not found", "");
    })
  }

  _createBuilding() {
    if (this.buildingName !== '') {
      let data = {
        buildingId: 0,
        name: this.buildingName,
        status: "ACTIVE"
      }

      this.buildingService.createBuilding(data).subscribe((data) => {
        this.notificationService.showSuccess("Building added success!", "");
      }, error => {
        this.notificationService.showError("Building added failed!", "");
      })
    } else {
      this.notificationService.showError("Building name is required!", "");
    }
    this.addempl.hide()
  }

  _floorCreate() {
    if (this.floorName !== '') {
      let floor = {
        floorId: 0,
        name: this.floorName,
        FloorStatus: "ACTIVE",
        buildingId: this.floorBuildingId
      };

      this.floorService.createFloor(floor).subscribe((data) => {
        if (data['success']) {
          this.notificationService.showSuccess("Floor Added Success!", "")
        } else {
          this.notificationService.showError("Floor Added failed", "");
        }
      }, error => {
        this.notificationService.showError("Floor Added failed", "");
      });
    } else {
      this.notificationService.showError("Floor name is required!", "")
    }
  }

  _loadBuildingDetails(id, name, status) {
    this.updateBuildingId = id;
    this.updateBuildingName = name;
    this.updateBuildingStatus = status;
    if (status === "ACTIVE") {
      this.active = true;
    } else if (status === "INACTIVE") {
      this.active = false;
    }
  }

  checkValue(event: any) {
  }

  _updateBuilding() {
    if (this.buildingName !== '') {
      let status = '';
      if (this.active) {
        status = "ACTIVE";
      } else {
        status = "INACTIVE";
      }
      let building = {
        buildingId: this.updateBuildingId,
        name: this.updateBuildingName,
        status: status
      }
      this.buildingService.updateBuilding(building).subscribe((data) => {
        if (data['success']) {
          this.notificationService.showSuccess("Building update success!", "");
          this._getBuildingList();
        } else {
          this.notificationService.showError("Building update failed!", "");
        }
      }, error => {
        this.notificationService.showError("Building update failed!", "");
      });
    }
  }

  _getBuildingId(buildId) {
    this.floorBuildingId = buildId;
  }

  _deleteBuilding() {

  }

}
