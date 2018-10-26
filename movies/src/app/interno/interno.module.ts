import { NgModule } from '@angular/core';
import { InternoComponent } from './interno.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InicioComponent } from './inicio/inicio.component';
import { routes_interno } from './interno-routing';
import { RouterModule } from '@angular/router';
import { FilmeListagemComponent } from './filme-listagem/filme-listagem.component';
import { DetalharComponent } from './detalhar/detalhar.component';
import { ComentarioComponent } from './comentario/comentario.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes_interno)
  ],
  declarations: [
    InternoComponent,
    InicioComponent,
    FilmeListagemComponent,
    DetalharComponent,
    ComentarioComponent
  ]
})
export class InternoModule { }
