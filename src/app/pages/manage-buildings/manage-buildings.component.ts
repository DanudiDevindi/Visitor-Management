import {Component, OnInit, ViewChild} from '@angular/core';
import {Building} from '../../model/building';
import {BuildingServiceService} from '../../service/building-service.service';
import {NotificationService} from '../../shared/util/notification.service';
import {FloorService} from '../../service/floor.service';
import {BuildingFloors} from '../../model/building-floors';
import {ModalComponent} from "../../modalview/modal.component";

@Component({
  selector: 'app-manage-buildings',
  templateUrl: './manage-buildings.component.html',
  styleUrls: ['./manage-buildings.component.scss']
})
export class ManageBuildingsComponent implements OnInit {

  @ViewChild('addemployee', {static: false})
  public modaleaddemployee: ModalComponent
  @ViewChild('editemployee', {static: false})
  public modaleeditemployee: ModalComponent
  @ViewChild('managefloor', {static: false})
  public modalemanagefloor: ModalComponent
  buildingList: Building[];
  floorList: BuildingFloors[];

  buildingName: string;

  updateBuildingId: string;
  updateBuildingName: string;
  updateBuildingStatus: string;

  floorBuildingId: number;

  active: boolean;
  floorActive: boolean;

  floorName: string;
  updateFloorId: number;

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
  addEmpTitle: any = 'Add Employee';
  editEmpTitle: any = 'Edit Employee';
  manageFloorTitle: any = 'Manage Floor';

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
        this._getBuildingList();
      }, error => {
        this.notificationService.showError("Building added failed!", "");
      })
    } else {
      this.notificationService.showError("Building name is required!", "");
    }
    this.modaleaddemployee.hide();
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
          this.notificationService.showSuccess("Floor Added Success!", "");
          this._getFloorsByBuildingId();
        } else {
          this.notificationService.showError("Floor Added failed", "");
        }
      }, error => {
        this.notificationService.showError("Floor Added failed", "");
      });
    } else {
      this.notificationService.showError("Floor name is required!", "")
    }
    this.modalemanagefloor.hide()
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
    this.modaleeditemployee.show()
  }

  checkValue(event: any) {
  }

  checkFloorValue(event: any) {

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
    this.modaleeditemployee.hide()
  }

  _getBuildingId(buildId) {
    this.floorBuildingId = buildId;
    this._getFloorsByBuildingId();
    this.modalemanagefloor.show()
  }

  _deleteBuilding(buildingId) {
    this.buildingService.deleteBuilding(buildingId).subscribe((data) => {
      if (data['success']) {
        this.notificationService.showSuccess("Building deleted successfully", "");
        this._getBuildingList();
      } else {
        this.notificationService.showError("Building delete failed", "");
      }
    }, error => {
      this.notificationService.showError("Building delete failed", "");
    })
  }

  _getFloorsByBuildingId() {
    this.floorService.getFloorsByBuildingId(this.floorBuildingId).subscribe((data: Object[]) => {
      if (data['success']) {
        this.floorList = data['body'];
      } else {
        this.notificationService.showError("Record not found", "");
      }
    }, error => {
      this.notificationService.showError("Record not found", "");
    });
  }

  _loadFloorDetails(floorId, floorName, floorStatus) {
    this.toggle();
    this.updateFloorId = floorId;
    this.floorName = floorName;

    if (floorStatus === "ACTIVE") {
      this.floorActive = true;
    } else {
      this.floorActive = false;
    }
  }

  _deleteFloor(floorId) {
    this.floorService.deleteFloor(floorId).subscribe((data) => {
      if (data['success']) {
        this.notificationService.showSuccess("Floor deleted success", "");
        this._getFloorsByBuildingId();
      } else {
        this.notificationService.showError("Floor delete failed", "");
      }
    }, error => {
      this.notificationService.showError("Floor delete failed", "");
    })
    this.modalemanagefloor.hide()
  }

  _updateFloor() {
    let status = '';
    if (this.floorActive) {
      status = "ACTIVE";
    } else {
      status = "INACTIVE";
    }

    let floor = {
      floorId: this.updateFloorId,
      name: this.floorName,
      status: status,
      buildingId: this.floorBuildingId
    }

    this.floorService.updateFloor(floor).subscribe((data) => {
      if (data['success']) {
        this.notificationService.showSuccess("Floor update success", "");
      } else {
        this.notificationService.showError("Floor update failed", "");
      }
    }, error => {
      this.notificationService.showError("Floor update failed", "");
    });
    this.modalemanagefloor.hide()
  }

  viewBuildingModal() {
    this.modaleaddemployee.show()
  }
}
