import { Component, OnInit } from '@angular/core';
import { Token } from '../model/token.model';
import { Router } from '@angular/router';
import { EventEmitterService } from '../service/emitter.service';

@Component({
  selector: 'app-interno',
  templateUrl: './interno.component.html',
  styleUrls: ['./interno.component.css']
})
export class InternoComponent implements OnInit {

  public token: Token;
  public titulo: string = '';

  constructor(private router: Router, private emitter: EventEmitterService) { }

  ngOnInit() {
    this.token = JSON.parse(localStorage.getItem('token'));
  }

  sair(): void {
    if (confirm('Deseja sair?')) {
      this.router.navigate(['/externo/login']);
    }
  }

  pesquisar(): void {
    this.router.navigate(['/interno/filmes']);
    this.emitter.get('evento.atualizarLista').emit(this.titulo);
  }

}
