import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChildGuardGuard implements CanActivateChild {
  constructor(
    private router: Router
  ) {}
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const isAuth = false;
      if (!isAuth) {
        this.router.navigate(['/login'])
        return false
      }
    return true;
  }
  
}
