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
        title: 'ebfhbfhf',
        address: 'dehyuehfuhfu',
        tel: '2323232',
        email:'eygfygyf',
        floor:'12',
        
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
