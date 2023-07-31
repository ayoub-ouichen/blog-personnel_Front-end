import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PosteComponent } from './poste/poste.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Contenu'
    },
    children: [
      // {
      //   path: 'poste',
      //   loadChildren: () => import('../contenu/poste/poste.component').then(m => m.PosteComponent)
      // }
      {
        path: 'poste',
        component: PosteComponent,
        data: {
          title: 'Poste'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContenuRoutingModule { }
