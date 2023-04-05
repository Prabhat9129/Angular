import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
import { User } from './user.model';

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
  user = new Subject<User>();

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
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
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
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  private handleAuthentication(
    email: string,
    localId: string,
    idToken: string,
    expiresIn: number
  ) {
    const ExpiratonDate = new Date(new Date().getTime() + expiresIn * 1000);

    const user = new User(email, localId, idToken, ExpiratonDate);
    this.user.next(user);
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

  logout() {
    // this.user.next();
  }
}
