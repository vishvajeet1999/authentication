import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { User } from './authntication/user.model';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators'

interface  AuthResponseData{
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;

}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new Subject<User>();

  constructor(private http: HttpClient) { }
  
  signUp(email: string, password: string){

    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCl9UAkJj04Dlcq21nKXa6JSQXEMp8AIC0', {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(tap(resData =>{
      const expirationDate = new Date(new Date().getTime() + +resData.expiresIn*1000);
      const user = new User(resData.email,
         resData.localId,
          resData.idToken,
          expirationDate);
          this.user.next(user);
    }))
  }

  login(email: string, password: string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCl9UAkJj04Dlcq21nKXa6JSQXEMp8AIC0',{
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(tap(resData =>{
      const expirationDate = new Date(new Date().getTime() + +resData.expiresIn*1000);
      const user = new User(resData.email,
         resData.localId,
          resData.idToken,
          expirationDate);
          this.user.next(user);
    }))
  }
  
  resetPassword(email: string){
      return this.http.post<any>('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCl9UAkJj04Dlcq21nKXa6JSQXEMp8AIC0',{
        requestType: 'PASSWORD_RESET',
        email: email
      })
  }
}
