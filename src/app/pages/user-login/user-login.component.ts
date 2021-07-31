import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../service/authentication.service';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  username : string;
  userPassword : string;

  userNameError : string;
  userPasswordError : string;

  constructor(private authService : AuthenticationService) { }

  ngOnInit() {
  }

  _login(){
    this.userNameError = "";
    this.userPasswordError = "";
    if (this.username !== undefined){
      if (this.userPassword !== undefined){
        this.authService.userLogin(this.username,this.userPassword);
      }else{
        this.userPasswordError = "User password is required!";
      }
    }else{
      this.userNameError = "Username is required!"
    }
  }

}
