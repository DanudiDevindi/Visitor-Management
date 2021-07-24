import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuildingServiceService {

  private BASE_URL = 'http://198.211.109.205:8082/';

  constructor(private httpClient : HttpClient) { }

  public getBuildingList(){
    let url = `${this.BASE_URL+'v1/building/all'}`;
    let token = localStorage.getItem('access_token');
    const headers =
      new HttpHeaders({
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/json'
      });

    return this.httpClient.get(url,{headers});
  }

  public createBuilding(building){
    let url = `${this.BASE_URL+'v1/building/add'}`;
    let token = localStorage.getItem('access_token');

    const headers =
      new HttpHeaders({
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/json'
      });

    return this.httpClient.post(url,building,{headers});
  }

  public updateBuilding(building){
    let url = `${this.BASE_URL+'v1/building/update'}`;
    let token = localStorage.getItem('access_token');

    const headers =
      new HttpHeaders({
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/json'
      });

    return this.httpClient.post(url,building,{headers});
  }
}
