import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Resolve, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadGuard implements Resolve<any> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return true
    // here we have to Inject service which return fdata
    // return {
    //   success: true,
    //   data: {
    //     key: 'Value'
    //   }
    // }
  }
  
}
