import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';
import { Poste } from 'src/app/Classes/poste';
import * as QuillNamespace from 'quill';
import ImageResize from 'quill-image-resize-module';
import { SPosteService } from 'src/app/services/posteService/s-poste.service';
let Quill: any = QuillNamespace;
Quill.register('modules/imageResize', ImageResize);


@Component({
  selector: 'app-poste',
  templateUrl: '../poste/poste.component.html',
  styleUrls: ['./poste.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PosteComponent implements OnInit {
  editor_modules = {};
  poste: Poste;
  blog: FormGroup;
  editorText: string;

  constructor(private formbuilder: FormBuilder, private sposte: SPosteService) {
    this.editor_modules = {
      imageResize: true
    };
    this.blog = this.formbuilder.group({
      titre: ['', [Validators.required]]
    })
    this.poste = new Poste();
  }

  ngOnInit(): void {
  }

  changeEditor(event: EditorChangeContent | EditorChangeSelection) {
    this.editorText = event['editor']['root']['innerHTML'];
  }

  contenuValid(): boolean {
    if (typeof this.editorText === 'undefined') {
      return false;
    }
    else {
      if (this.blog.invalid || this.editorText.length <= 20) { // Text insuffisant 
        return false;
      }
      else {
        return true;
      }
    }
  }

  enregisterPoste() {
    this.poste.p_titre = this.blog.get('titre')?.value;
    this.poste.p_contenu = this.editorText;
    this.sposte.ajouterPoste(this.poste).subscribe(
      (data: any) => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

}
