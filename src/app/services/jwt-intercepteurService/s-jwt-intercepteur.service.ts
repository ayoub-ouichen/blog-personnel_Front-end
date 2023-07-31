import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SAuthentificationService } from '../authService/s-authentification.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SJwtIntercepteurService implements HttpInterceptor {

  constructor(private authService: SAuthentificationService ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const token = this.authService.getToken();

      if (token) {
        req = req.clone({
          setHeaders:{
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true
        });
      }
      
      return next.handle(req);
  }
}
