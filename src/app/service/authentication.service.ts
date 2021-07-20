import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private BASE_URL = 'http://198.211.109.205:8082/';

  constructor(
    private httpClient : HttpClient,
    private router : Router
  ) { }

  public userLogin(username,userPassword){
    const params = new URLSearchParams();
    params.append('username', username);
    params.append('password', userPassword);
    params.append('grant_type', 'password');
    const headers =
      new HttpHeaders({
        'Authorization': 'Basic QURNSU46',
        'Content-Type': 'application/x-www-form-urlencoded'
      });

    let url = `${this.BASE_URL+'v1/authorize'}`;
    this.httpClient.post(url,params.toString(),{headers}).subscribe((data)=>{
      localStorage.setItem('access_token',data['access_token']);
      localStorage.setItem('token_type',data['token_type']);
      localStorage.setItem('user_id',data['user_id']);
      localStorage.setItem('userType',data['user']['role']);
      this.router.navigate(['/dashboard']);
    },error => {
      alert('Invalid Login!');
    });
  }

  public logOut(){
    localStorage.removeItem('access_token');
    localStorage.removeItem('token_type');
    localStorage.removeItem('user_id');
    localStorage.removeItem('userType');
    this.router.navigate(['user-login']);
  }
}
