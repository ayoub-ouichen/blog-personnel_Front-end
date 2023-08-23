import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';
import { Poste } from 'src/app/Classes/poste';
import * as QuillNamespace from 'quill';
import ImageResize from 'quill-image-resize-module';
import { SPosteService } from 'src/app/services/posteService/s-poste.service';
let Quill: any = QuillNamespace;

Quill.register('modules/imageResize', ImageResize);
const font = Quill.import('formats/font');
font.whitelist = ['Bitter', 'Montserrat','Pacifico','Permanent-Marker','Raleway','Roboto-Condensed'];
Quill.register(font, true);

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
  editorTextOnly: string;

  constructor(private formbuilder: FormBuilder, private sposte: SPosteService) {
    this.editor_modules = {
      toolbar: [
        [{ 'font': ['', 'Bitter', 'Montserrat','Pacifico','Permanent-Marker','Raleway','Roboto-Condensed'] }, { 'size': [] }],
        [ 'bold', 'italic', 'underline', 'strike' ],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'script': 'super' }, { 'script': 'sub' }],
        [{ 'header': '1' }, { 'header': '2' }, 'blockquote', 'code-block' ],
        [{ 'list': 'ordered' }, { 'list': 'bullet'}, { 'indent': '-1' }, { 'indent': '+1' }],
        [ 'direction', { 'align': [] }],
        [ 'link', 'image', 'video', 'formula' ],
        [ 'clean' ]
      ],
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
    this.editorTextOnly = event['editor']['root']['innerText'];
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

  readTime(text: string): number {
      const wordsPerMinute = 200;
      const noOfWords = this.editorTextOnly.split(/\s/g).length;
      const minutes = noOfWords / wordsPerMinute;
      const readTime = Math.ceil(minutes);
      return readTime;
  }

  enregisterPoste() {
    this.poste.p_titre = this.blog.get('titre')?.value;
    this.poste.p_contenu = this.editorText;
    this.poste.p_lire_temps = this.readTime(this.editorTextOnly);
    
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
