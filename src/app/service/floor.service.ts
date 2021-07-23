import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FloorService {

  private BASE_URL = 'http://198.211.109.205:8082/';

  constructor(private httpClient : HttpClient) { }

  public getFloorListByBuildingId(){

  }
}
