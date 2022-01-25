import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(
    private router: Router,
    private localstorageService: LocalstorageService
  ) {}
  canActivate(): boolean {
    const isTokenExist = this.localstorageService.getToken();

    if (isTokenExist) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
