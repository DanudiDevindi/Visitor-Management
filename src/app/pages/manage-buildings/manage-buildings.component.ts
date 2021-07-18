import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-buildings',
  templateUrl: './manage-buildings.component.html',
  styleUrls: ['./manage-buildings.component.scss']
})
export class ManageBuildingsComponent implements OnInit {

  constructor() { }
  visited = [
    {
        title: 'ebfhbfhf',
        address: 'dehyuehfuhfu',
        tel: '2323232',
        email:'eygfygyf',
        
        
      },
    
  ]

  public show:boolean = false;
  public hide:boolean=true;
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
  }

}
