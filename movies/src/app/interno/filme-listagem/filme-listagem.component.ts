import { Component, OnInit, Input } from '@angular/core';
import { EventEmitterService } from 'src/app/service/emitter.service';
import { FilmeService } from 'src/app/service/filme.service';
import { Filme } from '../../model/filme.model';

@Component({
  selector: 'app-filme-listagem',
  templateUrl: './filme-listagem.component.html',
  styleUrls: ['./filme-listagem.component.css']
})
export class FilmeListagemComponent implements OnInit {

  public filmes: Array<Filme>;
  private titulo: string = '';

  constructor(private emitter: EventEmitterService,
    private filmeService: FilmeService) { }

  ngOnInit() {
    this.filmes = new Array<Filme>();

    if (!this.titulo) {
      this.onAtualizarLista();
    }

    this.emitter.get('evento.atualizarLista').subscribe(titulo => {
      this.titulo = titulo;
      this.onAtualizarLista();
    });
  }

  private onAtualizarLista(): void {
    this.filmeService.getFilmesLocal(this.titulo).subscribe(filmes => {
      this.filmes = filmes;
    });
  }

  public getFilmesDaNuvem(): void {
    this.filmeService.getFilmesNaNuvem(this.titulo).subscribe(filmes => {
      this.filmes = filmes;
    });
  }

}
