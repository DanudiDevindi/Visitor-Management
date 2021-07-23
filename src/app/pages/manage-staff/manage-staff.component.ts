import {Component, OnInit} from '@angular/core'
import {SystemEmployeeService} from '../../service/system-employee.service'
import {Employee} from '../../model/employee'
import {NotificationService} from '../../shared/util/notification.service'

@Component({
  selector: 'app-manage-staff',
  templateUrl: './manage-staff.component.html',
  styleUrls: ['./manage-staff.component.scss']
})
export class ManageStaffComponent implements OnInit {

  employeeList: Employee[]
  empFirstName: string
  empLastName: string
  empMobile: string
  empEmail: string
  empDesignation: string
  empNic: string

  constructor(private systemEmployeeService: SystemEmployeeService, private notification: NotificationService) {
  }

  visited = [
    {

      firstname: 'ebfhbfhf',
      lastname: 'dehyuehfuhfu',
      designation: 'jknknkn',
      nicpassport: '554545',
      tel: '456454545',
      email: 'eygfygyf'


    }


  ]
  pageOfItems: Array<any>

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems
  }

  ngOnInit() {
    this._getSystemStaff()
  }

  _getSystemStaff() {
    this.systemEmployeeService.getEmployeeList('', 0).subscribe((data: Object[]) => {
      console.log(data)
      this.employeeList = data['body'].content
    }, error => {
      alert("Records Not Found")
      this.notification.showError("Records Not Found","")
    })
  }

  _createNewEmployee() {
    this.systemEmployeeService.createEmployee(this.empFirstName, this.empLastName, this.empNic, this.empEmail, this.empMobile, this.empDesignation).subscribe((data) => {
      console.log(data['success'])
      if (data['success']) {
        console.log('aaa')
      }
    })
  }

}
