import { Component, OnInit, Input } from '@angular/core';
import { ComentarioService } from '../../service/comentario.service';
import { Comentario } from '../../model/comentario.model';
import { Usuario } from '../../model/usuario.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {

  @Input() idFilme: string;
  public formCadastro: FormGroup;
  private usuarioLogado: Usuario;
  public comentarios: Array<Comentario>;

  constructor(private comentarioService: ComentarioService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formCadastro = this.formBuilder.group({
      descricao: [null, [
        Validators.required,
        Validators.maxLength(2000)
      ]]
    });
    this.comentarios = new Array<Comentario>();
    this.usuarioLogado = JSON.parse(localStorage.getItem('token')).usuario;
    this.getComentarios();
  }

  public getComentarios(): void {
    this.comentarioService.getComentariosPorFilme(this.idFilme).subscribe(comentarios => {
      this.comentarios = comentarios;
    })
  }

  public cadastrar(formValue: any): void {
    let comentario = new Comentario();
    comentario.usuario.id = this.usuarioLogado.id;
    comentario.filme.imdbID = this.idFilme;
    comentario.descricao = formValue.descricao;

    this.comentarioService.salvar(comentario).subscribe(() => {
      this.formCadastro.reset();
      this.getComentarios();
    });
  }

  public excluir(id: string): void {
    if (confirm('Excluir seu comentário?')) {
      this.comentarioService.excluir(id).subscribe(() => {
        this.getComentarios();
      });
    }
  }

}
