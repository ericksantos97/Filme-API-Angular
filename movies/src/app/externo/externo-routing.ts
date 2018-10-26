import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';

export const routes_externo: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: CadastroUsuarioComponent},
  {path: 'registro/:id', component: CadastroUsuarioComponent}
];

