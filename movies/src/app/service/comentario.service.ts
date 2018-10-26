import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../app-constants';
import { Observable } from 'rxjs';
import { Comentario } from '../model/comentario.model';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  private comentario_api_url = `${API_URL}/comentario`;

  constructor(private http: HttpClient) { }

  public getComentariosPorFilme(id_filme: string): Observable<Array<Comentario>> {
    return this.http.get<Array<Comentario>>(`${this.comentario_api_url}/${id_filme}`);
  }

  public salvar(comentario: Comentario): Observable<void> {
    return this.http.post<void>(`${this.comentario_api_url}/`, comentario);
  }

  public excluir(id: string): Observable<void> {
    return this.http.delete<void>(`${this.comentario_api_url}/${id}`);
  }
}
