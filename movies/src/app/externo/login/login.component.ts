import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../model/usuario.model';
import { UsuarioService } from '../../service/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;

  constructor(private service: UsuarioService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.service.limparToken();

    let usuario = new Usuario();

    this.formLogin = this.formBuilder.group({
      usuario: [usuario.usuario, [
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(6)
      ]],
      senha: [usuario.senha, [
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(6)
      ]]
    });

  }

  public entrar(usuario: Usuario): void {
    if (this.formLogin.invalid) {
      return;
    }

    this.service.logar(usuario).subscribe(token => {
      this.service.setToken(token);
      this.router.navigate(['/interno/inicio']);
    });
  }

}
