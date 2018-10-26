import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { FilmeListagemComponent } from './filme-listagem/filme-listagem.component';
import { DetalharComponent } from './detalhar/detalhar.component';

export const routes_interno: Routes = [
  {path: 'inicio', component: InicioComponent}, 
  {path: 'filmes', component: FilmeListagemComponent},
  {path: 'detalhar/:imdbId', component: DetalharComponent}
];
