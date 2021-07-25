import {CanActivate, Router} from '@angular/router';
import {AuthenticationService} from '../service/authentication.service';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate{

  constructor(
    private authenticateService : AuthenticationService,
    private router : Router
  ) {
  }

  canActivate(): boolean {
    if (this.authenticateService.loggedIn()){
      return true;
    }else{
      this.router.navigate(['/user-login'],{replaceUrl:true});
      return false;
    }
  }
}
