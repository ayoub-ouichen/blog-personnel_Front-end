import { SecurityContext } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Poste } from 'src/app/Classes/poste';
import { SPosteService } from 'src/app/services/posteService/s-poste.service';

@Component({
  selector: 'app-lire-blog',
  templateUrl: './lire-blog.component.html',
  styleUrls: ['./lire-blog.component.scss']
})
export class LireBlogComponent implements OnInit {

  poste: Poste;
  html: String = `<h6>Ecrire une description ici Ecrire une description ici Ecrire une description ici Ecrire une description ici</h6>`;
  followers: number = 123;

  constructor(private sposte: SPosteService) {
    this.poste = new Poste();
    this.sposte.lirePoste().subscribe(
      (data: any) => {
        this.poste.p_titre = data.p_titre;
        this.poste.p_contenu = data.p_contenu;
        this.poste.p_auteur = data.p_auteur;
        this.poste.p_lire_temps = data.p_lire_temps;
        this.poste.p_date_creation = data.p_date_creation;
        
      },error => {
        console.log(error);
        
      }
    );
  }
  



  ngOnInit(): void {
  }


}
