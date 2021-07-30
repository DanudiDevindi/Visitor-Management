import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FloorService {

  private BASE_URL = 'http://198.211.109.205:8082/';

  constructor(private httpClient : HttpClient) { }

  public getFloorListByBuildingId(){

  }

  public createFloor(floor){
    let url = `${this.BASE_URL+'v1/floor/add'}`;
    let token = localStorage.getItem('access_token');

    const headers =
      new HttpHeaders({
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/json'
      });

    return this.httpClient.post(url,floor,{headers});
  }

  public getFloorsByBuildingId(buildingId){
    let url = `${this.BASE_URL+'v1/floor/active/building/'+buildingId}`;
    let token = localStorage.getItem('access_token');
    const headers =
      new HttpHeaders({
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/json'
      });

    return this.httpClient.get(url,{headers});
  }

  public deleteFloor(floorId){
    let url = `${this.BASE_URL+'v1/floor/delete?id='+floorId}`;
    let token = localStorage.getItem('access_token');
    const headers =
      new HttpHeaders({
        'Authorization': 'Bearer '+token
      });

    return this.httpClient.patch(url,{headers});
  }

  public updateFloor(floor){
    let url = `${this.BASE_URL+'v1/floor/update'}`;
    let token = localStorage.getItem('access_token');

    const headers =
      new HttpHeaders({
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/json'
      });

    return this.httpClient.put(url,floor,{headers});
  }

}
