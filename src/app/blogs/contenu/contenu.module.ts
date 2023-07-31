import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContenuRoutingModule } from './contenu-routing.module';

import { PosteComponent } from "./poste/poste.component";


@NgModule({
  declarations: [
    PosteComponent
  ],
  imports: [
    CommonModule,
    ContenuRoutingModule
  ]
})
export class ContenuModule { }
