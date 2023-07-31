import { Injectable } from '@angular/core';
import * as moment from "moment";
import * as jwt_decode from 'jwt-decode';
import { timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SAuthentificationService {
  private tokenCle = 'BgPrUsTk';

  constructor() { }

  getToken(): string | null {
    return localStorage.getItem(this.tokenCle);
  }

  setToken(token: string): void {
    localStorage.setItem(this.tokenCle, token);
  }

  decodeToken(token: string): any {
    if (token != null) {
      return jwt_decode.default(token);
    }
  }

  removeToken(): void {
    localStorage.removeItem(this.tokenCle);
  }

  estConnecter(){
    if(this.getToken() != null) {
      const token = localStorage.getItem(this.tokenCle);
      const decodedToken = this.decodeToken(token);
      return ((new Date().getTime()) <= decodedToken.exp * 1000);
    } else {
      return false;
    }
  }  
}
