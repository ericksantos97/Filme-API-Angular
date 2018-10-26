import { NgModule } from '@angular/core';
import { ExternoComponent } from './externo.component';
import { LoginComponent } from './login/login.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routes_externo } from './externo-routing';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes_externo)
  ],
  declarations: [
    ExternoComponent,
    LoginComponent,
    CadastroUsuarioComponent
  ]
})
export class ExternoModule { }
