import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { utilisateur } from '../../Classes/utilisateur';

const API_URL = 'http://localhost:6523/user/';

@Injectable({
  providedIn: 'root'
})
export class SPersonService {

  constructor(private httpclient: HttpClient) { }
  
  afficher_utilisateur():Observable<utilisateur[]>{
    return this.httpclient.get<utilisateur[]>(API_URL + 'getUsers');
  }
   
  ajouter_utilisateur(nouveau_utilisateur: utilisateur){
    return this.httpclient.post(API_URL + 'sinscrire', nouveau_utilisateur);
  }
  
  connecter_utilisateur(nouveau_utilisateur: utilisateur){
    return this.httpclient.post(API_URL + 'connexion', nouveau_utilisateur);
  }
}
