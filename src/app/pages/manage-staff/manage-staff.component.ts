import {Component, OnInit, ViewChild} from '@angular/core'
import {SystemEmployeeService} from '../../service/system-employee.service'
import {Employee} from '../../model/employee'
import {NotificationService} from '../../shared/util/notification.service'
import {ModalComponent} from "../../modalview/modal.component";

@Component({
  selector: 'app-manage-staff',
  templateUrl: './manage-staff.component.html',
  styleUrls: ['./manage-staff.component.scss']
})
export class ManageStaffComponent implements OnInit {

  @ViewChild('addEmployee', {static: false})
  public modalAddEmployee: ModalComponent

  @ViewChild('editEmployee', {static: false})
  public modalEditEmployee: ModalComponent

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

  customSearchText : string;

  updateFirstnameError : string = '';
  updateLastnameError : string = '';
  updateNicError : string = '';
  updateMobileError : string = '';
  updateEmailError : string = '';
  updateDesignationError : string = '';

  addFirstnameError : string = '';
  addLastnameError : string = '';
  addNicError : string = '';
  addMobileError : string = '';
  addEmailError : string = '';
  addDesignationError : string = '';

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
  addEmpTitle: any = "Add Employee";
  editEmployeeTitle: any = 'Edit Employee';

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
    if (this._checkAddFormFieldsEmpty()){
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
    this.modalAddEmployee.hide()
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
    this.modalEditEmployee.show()
  }

  _updateEmployee(){
    if(this._checkUpdateFormFieldsEmpty()){
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
    this.modalEditEmployee.hide()
  }

  _checkUpdateFormFieldsEmpty(){
    this.updateDesignationError = "";
    this.updateFirstnameError = "";
    this.updateMobileError = "";
    this.updateLastnameError = "";
    this.updateNicError = "";
    this.updateEmailError = "";
    if (this.empUpdateFirstName !== ''){
      if (this.empUpdateMobile !== ''){
        if (this.empUpdateLastName !== ''){
          if (this.empUpdateEmail !== ""){
            if (this.empUpdateDesignation !== ""){
              if (this.empUpdateNic !== ""){
                return true;
              }else{
                this.updateNicError = "NIC is required";
                return false;
              }
            }else{
              this.updateDesignationError = "Designation is required";
              return false;
            }
          }else{
            this.updateEmailError = "Email is required";
            return false;
          }
        }else{
          this.updateLastnameError = "Last name is required";
          return false;
        }
      }else{
        this.updateMobileError = "Mobile number is required";
        return false;
      }
    }else {
      this.updateFirstnameError = "First name is required";
      return false;
    }
  }

  _checkAddFormFieldsEmpty(){
    this.addFirstnameError = "";
    this.addMobileError = "";
    this.addLastnameError = "";
    this.addNicError = "";
    this.addDesignationError = "";
    this.addEmailError = "";
    if (this.empFirstName !== ''){
      if (this.empMobile !== ''){
        if (this.empLastName !== ''){
          if (this.empEmail !== ""){
            if (this.empDesignation !== ""){
              if (this.empNic !== ""){
                return true;
              }else{
                this.addNicError = "NIC is required";
                return false;
              }
            }else{
              this.addDesignationError = "Designation is required";
              return false;
            }
          }else{
            this.addEmailError = "Email is required";
            return false;
          }
        }else{
          this.addLastnameError = "Last name is required";
          return false;
        }
      }else{
        this.addMobileError = "Mobile number is required";
        return false;
      }
    }else {
      this.addFirstnameError = "First name is required";
      return false;
    }
  }

  addEmpl() {
    this.modalAddEmployee.show()
  }
}
