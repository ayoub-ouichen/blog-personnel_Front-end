import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';

@Component({
  selector: 'app-poste',
  templateUrl: '../poste/poste.component.html',
  styleUrls: ['./poste.component.scss'],
  encapsulation: ViewEncapsulation.None
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
    console.log(event);
    
  }

}
