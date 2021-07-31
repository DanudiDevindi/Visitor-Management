import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VisitService {

  private BASE_URL = 'http://198.211.109.205:8082/';
  // private BASE_URL = 'http://localhost:8082/'

  constructor(private httpClient : HttpClient) { }

  public getCheckedList(searchText,pageNo){
    let url = `${this.BASE_URL+'v1/visit/checked?word='+searchText+'&index='+pageNo+'&size=10'}`;
    let token = localStorage.getItem('access_token');
    const headers =
      new HttpHeaders({
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/json'
      });

    return this.httpClient.get(url,{headers});
  }

  public getOverDueList(text,pageNo){
    let url = `${this.BASE_URL+'v1/visit/overdue?word='+text+'&index='+pageNo+'&size=10'}`;
    let token = localStorage.getItem('access_token');
    const headers =
      new HttpHeaders({
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/json'
      });

    return this.httpClient.get(url,{headers});
  }

  public getVisitCheckingHistory(){
    let url = `${this.BASE_URL+'v1/visit/history?type=ALL&word=12345&startDate=2021-07-07T00:00:00&endData=2021-07-08T00:00:00&index=0&size=10'}`;
    let token = localStorage.getItem('access_token');
    const headers =
      new HttpHeaders({
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/json'
      });

    return this.httpClient.get(url,{headers});
  }

  public checkOut(visitId){
    let url = `${this.BASE_URL+'v1/visit/checkout?id='+visitId}`;
    let token = localStorage.getItem('access_token');
    const headers =
      new HttpHeaders({
        'Authorization': 'Bearer '+token
      });

    return this.httpClient.patch(url,'',{headers});
  }
}
