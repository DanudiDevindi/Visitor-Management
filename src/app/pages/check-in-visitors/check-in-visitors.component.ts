import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-check-in-visitors',
  templateUrl: './check-in-visitors.component.html',
  styleUrls: ['./check-in-visitors.component.scss']
})
export class CheckInVisitorsComponent implements OnInit {

  constructor() {
  }

  // checkinList: any = []

  public checkinList: {
    firstName: string
    lastName: string
    nicPassport: string
    mobile: string
    email: string
  }[] = []

  public visitorModel = {
    firstName: null,
    lastName: null,
    nicPassport: null,
    mobile: null,
    email: null,
    purpose: null
  }

  public staffModel = {
    employeeCode: null,
    employeeName: null,
    telephoneNo: null,
    designation: null,
    email: null,
    building: null,
    floor: null

  }

  checkinReq = {
    visitors:null,
    purpose: null,
    employeeId: null,
    floorId: null
  }


  ngOnInit() {
  }

  visit = [

    {
      firstName: 'Ajdjncjnv',
      nicPassport: '511515151',
      mobile: '455454545'
    },
    {
      firstName: 'Ajdjncjnv',
      nicPassport: '511515151',
      mobile: '455454545'
    },
    {
      firstName: 'Ajdjncjnv',
      nicPassport: '511515151',
      mobile: '455454545'
    },
    {
      firstName: 'Ajdjncjnv',
      nicPassport: '511515151',
      mobile: '455454545'
    },
    {
      firstName: 'Ajdjncjnv',
      nicPassport: '511515151',
      mobile: '455454545'
    },
    {
      firstName: 'Ajdjncjnv',
      nicPassport: '511515151',
      mobile: '455454545'
    },
    {
      firstName: 'Ajdjncjnv',
      nicPassport: '511515151',
      mobile: '455454545'
    },
    {
      firstName: 'Ajdjncjnv',
      nicPassport: '511515151',
      mobile: '455454545'
    },
    {
      firstName: 'Ajdjncjnv',
      nicPassport: '511515151',
      mobile: '455454545'
    },
    {
      firstName: 'Ajdjncjnv',
      nicPassport: '511515151',
      mobile: '455454545'
    },
    {
      firstName: 'Ajdjncjnv',
      nicPassport: '511515151',
      mobile: '455454545'
    },
    {
      firstName: 'Ajdjncjnv',
      nicPassport: '511515151',
      mobile: '455454545'
    },
    {
      firstName: 'Ajdjncjnv',
      nicPassport: '511515151',
      mobile: '455454545'
    },
    {
      firstName: 'Ajdjncjnv',
      nicPassport: '511515151',
      mobile: '455454545'
    },
    {
      firstName: 'Ajdjncjnv',
      nicPassport: '511515151',
      mobile: '455454545'
    }

  ]


  pageOfItems: Array<any>

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems
  }


  keyword = 'name'
  data = [
    {
      id: 1,
      name: 'Usa'
    },
    {
      id: 2,
      name: 'England'
    },
    {
      id: 3,
      name: 'Englanssd'
    },
    {
      id: 4,
      name: 'Engladddnd'
    },
    {
      id: 5,
      name: 'Englanffffd'
    }
  ]


  selectEvent(item) {
    // do something with selected item
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something when input is focused
  }


  addToCheckinList() {
    this.checkinList.push({
      firstName: this.visitorModel.firstName,
      lastName: this.visitorModel.lastName,
      nicPassport: this.visitorModel.nicPassport,
      mobile: this.visitorModel.mobile,
      email: this.visitorModel.email
    })

  }

  checkin() {

  }
}
