import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { ConfigService } from './config.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private configService: ConfigService,
    private router: Router
  ) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if (this.configService.token) {
      if (state.url === '/login') {
        this.router.navigate(['']);
        return false;
      }
      return true;
    } else {
      if (state.url === '/login') {
        return true;
      }
      this.router.navigate(['/login']);
      return false;
    }
  }

}
