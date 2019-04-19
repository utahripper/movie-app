import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login() {
    return of({
      loggedIn: true
    }).pipe(delay(1500));
  }

}