import {Component, ElementRef, Inject, OnInit} from '@angular/core'
import {ReceptionistService} from '../../service/receptionist.service'
import {NotificationService} from '../../shared/util/notification.service'
import {element} from 'protractor'
import {FormBuilder, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-check-in-visitors',
  templateUrl: './check-in-visitors.component.html',
  styleUrls: ['./check-in-visitors.component.scss']
})
export class CheckInVisitorsComponent implements OnInit {
  private empList: string [] = []
  private floorList: any = []
  private activePassList: any = []

  constructor(private receptionistService: ReceptionistService,
              private notification: NotificationService,
              private formBuilder: FormBuilder,
              @Inject(ElementRef) elementRef: ElementRef) {
  }

  // checkinList: any = []
  employeeList: any = []

  public checkinList: {
    visitorId: number
    visitorFirstName: string
    visitorLastName: string
    mobile: string
    nic: string
    email: string
    passCardId: number
  }[] = []

  public visitorModel = {
    firstName: null,
    lastName: null,
    nicPassport: null,
    mobile: null,
    email: null,
    purpose: null,
    passCard: null
  }

  public staffModel = {
    employeeId: null,
    employeeName: null,
    mobile: null,
    designation: null,
    email: null,
    building: null,
    floorId: null,
    empSearch: null

  }

  checkinReq = {
    visitors: null,
    purpose: null,
    employeeId: null,
    floorId: null
  }

  visitorForm: FormGroup
  submitted = false

  get f() {
    return this.visitorForm.controls
  }

  onSubmit() {
    this.submitted = true

    // stop here if form is invalid
    if (this.visitorForm.invalid) {
      return
    }

    // display form values on success
    console.log(
      'SUCCESS!! :-)\n\n' + JSON.stringify(this.visitorForm.value, null, 4)
    )
  }

  onReset() {
    this.submitted = false
    this.visitorForm.reset()
  }

  private buildingList: any = []


  ngOnInit() {
    this.initVisitForm()
    this.getEmployeeList()
    this.getBuildings()
    this.getActivePass()
  }

  private initVisitForm() {
    this.visitorForm = this.formBuilder.group({
      nicVisitor: [],
      firstNameVisitor: [],
      lastNameVisitor: [],
      mobileVisitor: []
      // passCardVisitor: []
    })
  }

  private getActivePass() {
    this.receptionistService.getActivePass().subscribe((data) => {
      if (data['success']) {
        this.activePassList = data['body']
      }
    }, error => {
      this.notification.showError(error['msg'], "")
    })
  }

  private getBuildings() {
    this.receptionistService.getBuildings().subscribe((data) => {
      if (data['success']) {
        this.buildingList = data['body']
      }
    }, error => {
      this.notification.showError(error['msg'], "")
    })
  }


  getEmployeeList() {
    this.receptionistService.getEmployeeList().subscribe((data) => {
        if (data['success']) {
          this.employeeList = data['body']
          this.addIntoList(this.employeeList)
        }
      },
      error => {
        this.notification.showError(error['msg'], "")
      })
  }

  private addIntoList(employeeList: any) {
    for (let i = 0; i < employeeList.length; i++) {
      this.empList[i] = employeeList[i].search
    }
    console.log(this.employeeList.values)
    console.log(this.empList)
  }

  private telephoneNo: any = null
  visitorNic: any = null
  private otherPurpose: any = false
  reason: any = null
  purpose: any = null
  private validBuilding: any = true
  private validRecord: boolean = true


  addToCheckinList() {
    if (this.validateRecord()) {
      this.checkinList.push({
        visitorId: 0,
        visitorFirstName: this.visitorModel.firstName,
        visitorLastName: this.visitorModel.lastName,
        mobile: this.visitorModel.mobile,
        nic: this.visitorModel.nicPassport,
        email: this.visitorModel.email,
        passCardId: this.visitorModel.passCard
      })
    } else {
      this.notification.showWarning("Please check whether all required fields are filled", "")
    }


    this.resetVisitor()

  }

  private validateRecord(): boolean {
    if ((this.visitorModel.firstName == null || this.visitorModel.firstName == '') &&
      (this.visitorModel.lastName == null || this.visitorModel.lastName == '') &&
      (this.visitorModel.mobile == null || this.visitorModel.mobile == '') &&
      (this.visitorModel.nicPassport == null || this.visitorModel.nicPassport == '') &&
      (this.visitorModel.passCard == null || this.visitorModel.passCard == '')) {
      return false
    } else if ((this.visitorModel.firstName != null || this.visitorModel.firstName != '') &&
      (this.visitorModel.lastName != null || this.visitorModel.lastName != '') &&
      (this.visitorModel.mobile != null || this.visitorModel.mobile != '') &&
      (this.visitorModel.nicPassport != null || this.visitorModel.nicPassport != '') &&
      (this.visitorModel.passCard != null || this.visitorModel.passCard != '')) {
      return true
    }
  }

  private resetVisitor() {
    this.visitorModel.firstName = null
    this.visitorModel.lastName = null
    this.visitorModel.mobile = null
    this.visitorModel.nicPassport = null
    this.visitorModel.email = null
    this.visitorModel.passCard = null
  }

  checkin() {

    this.checkinReq.visitors = this.checkinList
    this.checkinReq.purpose = this.visitorModel.purpose
    this.checkinReq.employeeId = this.staffModel.employeeId
    this.checkinReq.floorId = this.staffModel.floorId
    if (this.checkinList.length > 0) {
      this.receptionistService.checkin(this.checkinReq).subscribe((res) => {
        if (res['success']) {
          this.notification.showSuccess(res['msg'], "")
        } else {
          this.notification.showError("failed to add Visitor(s)", "")
        }

      }, error => {
        this.notification.showError(error['msg'], "")
      })
    } else {
      this.notification.showError("Select visitor first", "")
    }

    this.checkinList = []

    this.resetEmployee()
  }

  private resetEmployee() {
    this.staffModel.empSearch = null
    this.staffModel.employeeName = null
    this.staffModel.mobile = null
    this.staffModel.designation = null
    this.staffModel.email = null
    this.staffModel.building = null
    this.staffModel.floorId = null
    this.visitorModel.purpose = null
    this.purpose = null
  }

  fillBySelectedEmp() {

  }

  onSelect(item: any) {
    for (let i = 0; i < this.employeeList.length; i++) {
      if (this.employeeList[i].search === item) {
        this.staffModel.employeeId = this.employeeList[i].employeeId
        this.staffModel.employeeName = this.employeeList[i].firstName + " " + this.employeeList[i].lastName
        this.staffModel.mobile = this.employeeList[i].mobile
        this.staffModel.designation = this.employeeList[i].designation
        this.staffModel.email = this.employeeList[i].email
      }
    }
  }


  getSeletedItem(e) {
    console.log(e)

  }

  loadFloorList() {
    if (this.staffModel.building != null && this.staffModel.building != "") {
      this.receptionistService.getFloorList(this.staffModel.building).subscribe((data) => {
        if (data['success']) {
          if (data['body'].length > 0) {
            this.floorList = data['body']
          } else {
            this.floorList = []
            this.staffModel.floorId = null
            this.notification.showWarning("No floors detected for selected building", "")
          }
        } else {
          this.floorList = []
          this.staffModel.floorId = null
          this.notification.showWarning("No floors detected for selected building", "")
        }
      }, error => {
        this.notification.showError(error['msg'], "")
      })
    }
  }

  searchVisitor() {
    this.receptionistService.searchVisitor(this.visitorNic).subscribe((data) => {
        if (data['success']) {
          this.visitorModel.firstName = data['body'].firstName
          this.visitorModel.lastName = data['body'].lastName
          this.visitorModel.mobile = data['body'].mobile
          this.visitorModel.email = data['body'].email
          this.visitorModel.nicPassport = data['body'].nic
        } else {
          this.visitorModel.nicPassport = this.visitorNic
        }
      },
      error => {
        this.notification.showError(error['msg'], "")
      })

  }

  getPurpose() {
    if (this.purpose != null && this.purpose != "") {
      if (this.purpose == "Other") {
        this.otherPurpose = true
        if (this.reason == "" || this.reason == null) {
          this.visitorModel.purpose = this.purpose
        } else {
          this.visitorModel.purpose = this.reason
        }
      } else {
        this.otherPurpose = false
        this.visitorModel.purpose = this.purpose
      }
    }
  }

  deleteSelectedRecord(row: number) {
    this.checkinList.splice(row, 1)
  }

}
