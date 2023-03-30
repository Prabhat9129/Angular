import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}
  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCj6898twumJP-LMSC6s2Q7jv2dUKfoF4A',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(catchError(this.handleError));
  }

  signIn(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCj6898twumJP-LMSC6s2Q7jv2dUKfoF4A',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(catchError(this.handleError));
  }

  private handleError(errRes: HttpErrorResponse) {
    let errMessage = 'An Unknown Error Occured';
    if (!errRes.error || !errRes.error.error) {
      return throwError(errMessage);
    }
    switch (errRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errMessage = 'Email Alredy exits';
        break;
      case 'EMAIL_NOT_FOUND':
        errMessage = 'Email is Invaild';
        break;
      case 'INVALID_PASSWORD':
        errMessage = 'Password is Invaild';
        break;
    }

    return throwError(errMessage);
  }
}
