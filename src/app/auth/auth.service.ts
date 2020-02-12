import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { ChildComponent } from '../data-binding/child/child.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor( private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      const token = sessionStorage.getItem('token');

      if (token !== null) {
        return true;
      } else {
        this.router.navigateByUrl('/directivas');
        return false;
      }

    }

}

