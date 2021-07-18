import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-staff',
  templateUrl: './manage-staff.component.html',
  styleUrls: ['./manage-staff.component.scss']
})
export class ManageStaffComponent implements OnInit {

  constructor() { }
  visited = [
    {
      
        firstname: 'ebfhbfhf',
        lastname: 'dehyuehfuhfu',
        designation: 'jknknkn',
        nicpassport: '554545',
        tel: '456454545',
        email:'eygfygyf',
       
        
      },
  
    
    

  ]
  pageOfItems: Array<any>;
 onChangePage(pageOfItems: Array<any>) {
  // update current page of items
  this.pageOfItems = pageOfItems;
}

  ngOnInit() {
  }

}
