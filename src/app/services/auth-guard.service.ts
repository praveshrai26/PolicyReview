import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(protected router: Router, protected authService: AuthService) { }
  canActivate() {
    if (this.authService.isLoggedIn()) return true;

    this.router.navigate(['/Login']);
    return false;
  }
}
