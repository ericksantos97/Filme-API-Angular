import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Token } from '../model/token.model';
import { Observable } from 'rxjs/internal/Observable';
import { API_URL } from '../app-constants';
import { Usuario } from '../model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuario_api_url = `${API_URL}/usuario`;

  constructor(private http: HttpClient) { }

  public logar(usuario: Usuario): Observable<Token> {
    return this.http.post<Token>(`${this.usuario_api_url}/autenticar`, usuario);
  }

  public cadastrar(usuario: Usuario): Observable<Token> {
    return this.http.post<Token>(`${this.usuario_api_url}/`, usuario);
  }

  public alterar(id: string, usuario: Usuario): Observable<Token> {
    return this.http.put<Token>(`${this.usuario_api_url}/${id}`, usuario);
  }

  public buscarPorId(id: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.usuario_api_url}/${id}`);
  }

  public setToken(token: Token): void {
    localStorage.setItem('token', JSON.stringify(token));
  }

  public limparToken(): void {
    localStorage.clear();
  }
}
