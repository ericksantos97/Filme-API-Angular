import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { routes_externo } from './externo/externo-routing';
import { routes_interno } from './interno/interno-routing';
import { ExternoComponent } from './externo/externo.component';
import { InternoComponent } from './interno/interno.component';

const routes: Routes = [
  { path: 'externo', component: ExternoComponent, children: routes_externo },
  { path: 'interno', component: InternoComponent, children: routes_interno }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
