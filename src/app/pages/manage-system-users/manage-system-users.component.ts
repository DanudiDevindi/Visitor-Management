import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-system-users',
  templateUrl: './manage-system-users.component.html',
  styleUrls: ['./manage-system-users.component.scss']
})
export class ManageSystemUsersComponent implements OnInit {

  constructor() { }
  visited = [
    {
        firstname: 'ebfhbfhf',
        lastname: 'dehyuehfuhfu',
        designation: 'jknknkn',
        nicpassport: '554545',
        tel: '456454545',
        email:'eygfygyf',
        username:'1frfgrg2',
        password:'fhe2121'
        
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
