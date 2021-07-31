import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SystemUserService {

  private BASE_URL = 'http://198.211.109.205:8082/';

  constructor(private httpClient : HttpClient) { }

  public getSystemUsers(searchText,pageNo){
    let url = `${this.BASE_URL+'v1/receptionist/all?word='+searchText+'&index='+pageNo+'&size=100'}`;
    let token = localStorage.getItem('access_token');
    const headers =
      new HttpHeaders({
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/json'
      });

    return this.httpClient.get(url,{headers});
  }

  public createUser(reception){
    let url = `${this.BASE_URL+'v1/receptionist/add'}`;
    let token = localStorage.getItem('access_token');

    const headers =
      new HttpHeaders({
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/json'
      });

    return this.httpClient.post(url,reception,{headers});
  }

  public updateUser(reception){
    let url = `${this.BASE_URL+'v1/receptionist/update'}`;
    let token = localStorage.getItem('access_token');

    const headers =
      new HttpHeaders({
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/json'
      });

    return this.httpClient.put(url,reception,{headers});
  }
}
