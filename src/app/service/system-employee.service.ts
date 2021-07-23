import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SystemEmployeeService {

  private BASE_URL = 'http://198.211.109.205:8082/';

  constructor(private httpClient : HttpClient) { }

  public getEmployeeList(searchText,pageNo){
    let url = `${this.BASE_URL+'v1/employee/all?word='+searchText+'&index='+pageNo+'&size=10'}`;
    let token = localStorage.getItem('access_token');
    const headers =
      new HttpHeaders({
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/json'
      });

    return this.httpClient.get(url,{headers});
  }

  public createEmployee(firstName,lastName,nic,email,mobile,designation){
    let url = `${this.BASE_URL+'v1/employee/add'}`;

    let data = {
      employeeId : 0,
      firstName : firstName,
      lastName : lastName,
      nic : nic,
      email : email,
      mobile : mobile,
      designation : designation
    }

    let token = localStorage.getItem('access_token');

    const headers =
      new HttpHeaders({
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/json'
      });

    return this.httpClient.post(url,data,{headers});

  }
}
