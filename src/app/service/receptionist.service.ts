import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ReceptionistService {

  // private BASE_URL = 'http://198.211.109.205:8082/';
  private BASE_URL = 'http://localhost:8082/';

  constructor(private httpClient : HttpClient) { }



}
