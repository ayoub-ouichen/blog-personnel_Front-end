import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContenuRoutingModule } from './contenu-routing.module';

import { PosteComponent } from "./poste/poste.component";
import { QuillModule } from 'ngx-quill';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PosteComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ContenuRoutingModule,
    QuillModule.forRoot()
  ]
})
export class ContenuModule { }
