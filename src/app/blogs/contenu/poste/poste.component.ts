import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';

@Component({
  selector: 'app-poste',
  templateUrl: '../poste/poste.component.html'
})
export class PosteComponent implements OnInit {
  blog: FormGroup;
  editorText: any;

  constructor() {
  }

  ngOnInit(): void {
  }
  
  onSubmit() {
    
  }
  changeEditor(event: EditorChangeContent | EditorChangeSelection) {
    this.editorText = event['editor']['root']['innerHTML'];
  }

}
