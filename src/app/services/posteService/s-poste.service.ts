import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Poste } from 'src/app/Classes/poste'

const API_URL = 'http://localhost:6523/poste/';

@Injectable({
  providedIn: 'root'
})
export class SPosteService {

  constructor(private httpClient: HttpClient) { }

  ajouterPoste(poste: Poste):Observable<any> {
    return this.httpClient.post(API_URL + 'nouveau-poste', poste);
  }
}
