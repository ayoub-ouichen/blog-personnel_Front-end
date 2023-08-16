import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';
import * as QuillNamespace from 'quill';
import ImageResize from 'quill-image-resize-module';
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

  blog: FormGroup;
  editorText: any;

  constructor() {
    this.editor_modules = {
      toolbar: {
        container: [
          [{ 'font': [] }],
          [{ 'size': ['small', false, 'large', 'huge'] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ 'header': 1 }, { 'header': 2 }],
          [{ 'color': [] }, { 'background': [] }],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }],
          [{ 'align': [] }],
          ['link', 'image']
        ]
      },
      imageResize: true
    };
  }

  ngOnInit(): void {
  }
  
  onSubmit() {
    
  }
  changeEditor(event: EditorChangeContent | EditorChangeSelection) {
    this.editorText = event['editor']['root']['innerHTML'];
    console.log(event);
    
  }

}
