import { Component, OnInit } from '@angular/core';
import { Poste } from 'src/app/Classes/poste';
import { SPosteService } from 'src/app/services/posteService/s-poste.service';

@Component({
  selector: 'app-lire-blog',
  templateUrl: './lire-blog.component.html',
  styleUrls: ['./lire-blog.component.scss']
})
export class LireBlogComponent implements OnInit {

  poste: Poste;

  constructor(private sposte: SPosteService) {
    this.poste = new Poste();
    this.sposte.lirePoste().subscribe(
      (data: any) => {
        this.poste.p_titre = data.p_titre;
        this.poste.p_contenu = data.p_contenu;
        this.poste.p_auteur = data.p_auteur;
        this.poste.p_lire_temps = data.p_lire_temps;
        
      },error => {
        console.log(error);
        
      }
    );
  }

  ngOnInit(): void {
  }


}
