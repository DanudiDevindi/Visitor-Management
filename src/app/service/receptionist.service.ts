import {Injectable} from '@angular/core'
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ReceptionistService {

  // private BASE_URL = 'http://198.211.109.205:8082/';
  private BASE_URL = 'http://localhost:8082/'

  constructor(private httpClient: HttpClient) {
  }

  private tocken: any

  checkin(checkinReq: any) {

    this.tocken = localStorage.getItem('access_token')

    const headers =
      new HttpHeaders({
        'Authorization': 'Bearer ' + this.tocken,
        'Content-Type': 'application/json'
      })

    const url = `${this.BASE_URL + 'v1/visit/checkin'}`
    return this.httpClient.post(url, checkinReq, {headers: headers})
  }

  getEmployeeList() {
    this.tocken = localStorage.getItem('access_token')

    const headers =
      new HttpHeaders({
        'Authorization': 'Bearer ' + this.tocken,
        'Content-Type': 'application/json'
      })

    const url = `${this.BASE_URL + 'v1/employee/search/all/active'}`
    return this.httpClient.get(url, {headers})
  }

  getBuildings() {
    this.tocken = localStorage.getItem('access_token')

    const headers =
      new HttpHeaders({
        'Authorization': 'Bearer ' + this.tocken,
        'Content-Type': 'application/json'
      })

    const url = `${this.BASE_URL + 'v1/building/active'}`
    return this.httpClient.get(url, {headers})
  }

  getFloorList(buildingId) {
    this.tocken = localStorage.getItem('access_token')

    const headers =
      new HttpHeaders({
        'Authorization': 'Bearer ' + this.tocken,
        'Content-Type': 'application/json'
      })

    const url = `${this.BASE_URL + 'v1/floor/active/building/{1}'}`.replace('{1}', buildingId)
    return this.httpClient.get(url, {headers})
  }

  searchVisitor(nic) {
    this.tocken = localStorage.getItem('access_token')

    const headers =
      new HttpHeaders({
        'Authorization': 'Bearer ' + this.tocken,
        'Content-Type': 'application/json'
      })

    const url = `${this.BASE_URL + 'v1/visitor/filter/nic?nic={nic}'}`.replace('{nic}', nic)
    return this.httpClient.post(url,'', {headers})
  }

  getActivePass() {
    this.tocken = localStorage.getItem('access_token')

    const headers =
      new HttpHeaders({
        'Authorization': 'Bearer ' + this.tocken,
        'Content-Type': 'application/json'
      })

    const url = `${this.BASE_URL + 'v1/pass/active'}`
    return this.httpClient.get(url, {headers})
  }
}
