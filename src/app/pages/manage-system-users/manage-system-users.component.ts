import {Component, OnInit, ViewChild} from '@angular/core';
import {SystemUserService} from '../../service/system-user.service';
import {Reception} from '../../model/reception';
import {NotificationService} from '../../shared/util/notification.service';
import {ModalComponent} from "../../modalview/modal.component";

@Component({
  selector: 'app-manage-system-users',
  templateUrl: './manage-system-users.component.html',
  styleUrls: ['./manage-system-users.component.scss']
})
export class ManageSystemUsersComponent implements OnInit {

  receptionList: Reception[];

  @ViewChild('addReceptionist', {static: false})
  public modalAddReceptionist: ModalComponent

  @ViewChild('editReceptionist', {static: false})
  public modalEditReceptionist: ModalComponent

  username: string;
  firstName: string;
  lastName: string;
  nic: string;
  email: string;
  mobile: string;
  password: string;

  customSearchText: string;

  userId: number;
  updateFirstName: string;
  updateLastName: string;
  updateNic: string;
  updateMobile: string;
  updateEmail: string;
  updateUsername: string;
  updatePassword: string;
  updateStatus: string;
  updateUserRole: string;

  accepted: boolean;

  constructor(
    private systemUserService: SystemUserService,
    private notificationService: NotificationService
  ) {
  }

  visited = [
    {
      firstname: 'ebfhbfhf',
      lastname: 'dehyuehfuhfu',
      designation: 'jknknkn',
      nicpassport: '554545',
      tel: '456454545',
      email: 'eygfygyf',
      username: '1frfgrg2',
      password: 'fhe2121'

    },


  ]

  public show: boolean = false;

  toggle() {
    this.show = !this.show;
  }

  pageOfItems: Array<any>;
  addReceptionistTitle: any = 'Add Receptionist';
  editReceptionistTitle: any = 'Edit Receptionist';

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  ngOnInit() {
    this._getSystemUsers();
  }

  _getSystemUsers() {
    this.systemUserService.getSystemUsers('', 0).subscribe((data: Object[]) => {
      this.receptionList = data['body'];
    }, error => {
      this.notificationService.showError("Records Not Found", "");
    });
  }

  _createReception() {
    let reception = {
      userId: 0,
      userName: this.username,
      firstName: this.firstName,
      lastName: this.lastName,
      nic: this.nic,
      email: this.email,
      mobile: this.mobile,
      password: this.password,
      createdDate: null,
      role: 'RECEP',
      status: 'ACTIVE'

    }

    this.systemUserService.createUser(reception).subscribe((data) => {
      if (data['success']) {
        this.notificationService.showSuccess("Reception Added Success", "");
        this._getSystemUsers();
      } else {
        this.notificationService.showError("Reception Added Failed", "");
      }
    }, error => {
      this.notificationService.showError("Reception Added Failed", "");
    })
    this.modalAddReceptionist.hide()
  }

  _loadReceptionDetails(userId, username, firstname, lastname, nic, email, mobile, password, status, role) {
    this.userId = userId;
    this.updateUsername = username;
    this.updateFirstName = firstname;
    this.updateLastName = lastname;
    this.updateNic = nic;
    this.updateEmail = email;
    this.updateMobile = mobile;
    this.updatePassword = '';
    this.updateStatus = status;
    this.updateUserRole = role;
    if (status === "ACTIVE") {
      this.accepted = true;
    } else if (status === "INACTIVE") {
      this.accepted = false;
    }
    this.modalEditReceptionist.show()
  }

  _usersCustomSearch() {
    if (this.customSearchText !== '') {
      this.systemUserService.getSystemUsers(this.customSearchText, 0).subscribe((data: Object[]) => {
        this.receptionList = data['body'];
      }, error => {
        this.notificationService.showError("Records Not Found", "");
      });
    } else {
      this._getSystemUsers();
    }
  }

  _updateUser() {
    let pass = this.updatePassword;
    if (pass === '') {
      pass = null;
    }
    let status = '';
    if (this.accepted) {
      status = "ACTIVE";
    } else {
      status = "INACTIVE";
    }
    let reception = {
      userId: this.userId,
      userName: this.updateUsername,
      firstName: this.updateFirstName,
      lastName: this.updateLastName,
      nic: this.updateNic,
      email: this.updateEmail,
      mobile: this.updateMobile,
      password: pass,
      createdDate: null,
      role: this.updateUserRole,
      status: status
    }
    this.systemUserService.updateUser(reception).subscribe((data) => {
      if (data['success']) {
        this.notificationService.showSuccess("User update success", "");
        this._getSystemUsers();
      } else {
        this.notificationService.showError("User update failed", "");
      }
    }, error => {
      this.notificationService.showError("User update failed", "");
    })
    this.modalEditReceptionist.hide()
  }

  checkValue(event: any) {
  }

  addReceptionistAccount() {
    this.modalAddReceptionist.show()
  }
}
