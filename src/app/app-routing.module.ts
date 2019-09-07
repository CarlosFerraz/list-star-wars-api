import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmesComponent } from './filmes/filmes.component';
import { FilmeDetalheComponent } from './filme-detalhe/filme-detalhe.component';
import { FilmeNovoComponent } from './filme-novo/filme-novo.component';

const routes: Routes = [
  {
    path: 'filmes',
    component: FilmesComponent,
    data: { title: 'Lista de Filmes' }
  },
  {
    path: 'filme-detalhe/:id',
    component: FilmeDetalheComponent,
    data: { title: 'Detalhe do Filme' }
  },
  {
    path: 'filme-novo',
    component: FilmeNovoComponent,
    data: { title: 'Adicionar Filme' }
  },
  { path: '',
    redirectTo: '/filmes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
