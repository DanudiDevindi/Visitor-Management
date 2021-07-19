import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../service/authentication.service';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  username : string;
  userPassword : string;

  constructor(private authService : AuthenticationService) { }

  ngOnInit() {
  }

  private _login(){
    if (this.username !== ''){
      if (this.userPassword !== ''){
        this.authService.userLogin(this.username,this.userPassword);
      }else{
        alert('Password is required!');
      }
    }else{
      alert('Username is required!');
    }
  }

}
