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

  empId : number;
  empUpdateFirstName : string;
  empUpdateLastName : string;
  empUpdateMobile : string;
  empUpdateEmail : string;
  empUpdateDesignation : string;
  empUpdateNic : string;

  customSearchText : string

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
      this.employeeList = data['body'].content
    }, error => {
      this.notification.showError("Records Not Found","")
    })
  }

  _createNewEmployee(){
   this.systemEmployeeService.createEmployee(this.empFirstName,this.empLastName,this.empNic,this.empEmail,this.empMobile,this.empDesignation).subscribe((data)=>{
     if (data['success']){
       this.notification.showSuccess("Employee Added Success","");
     }else{
       this.notification.showError("Employee Added Failed","")
     }
   },error => {
     this.notification.showError("Employee Added Failed","")
   })
  }

  employeeCustomSearch(){
   if (this.customSearchText !== ''){
     this.systemEmployeeService.getEmployeeList(this.customSearchText,0).subscribe((data:Object[])=>{
       this.employeeList = data['body'].content;
     },error => {
       this.notification.showError("Records Not Found","")
     });
   }else {
     this._getSystemStaff();
   }
  }

  _loadEmployeeDetails(id,firstName,lastName,nic,email,mobile,designation){
   this.empId = id;
   this.empUpdateFirstName = firstName;
   this.empUpdateLastName = lastName;
   this.empUpdateNic = nic;
   this.empUpdateEmail = email;
   this.empUpdateMobile = mobile;
    this.empUpdateDesignation = designation;
  }

  _updateEmployee(){
   this.systemEmployeeService.updateEmployee(this.empId,this.empUpdateFirstName,this.empUpdateLastName,
     this.empUpdateNic,this.empUpdateEmail,this.empUpdateMobile,this.empUpdateDesignation)
     .subscribe((data)=>{
     if (data['success']){
       this.notification.showSuccess("Employee Update Success","");
       this._getSystemStaff();
     }else {
       this.notification.showError("Employee Update Failed","");
     }
   },
     error => {
       this.notification.showError("Employee Update Failed","");
     });
  }

}
