import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { API_URL } from '../app-constants';
import { Filme } from '../model/filme.model';

@Injectable({
    providedIn: 'root'
})
export class FilmeService {

    private filme_api_url = `${API_URL}/filme`;

    constructor(private http: HttpClient) { }

    public getFilmesLocal(titulo: string): Observable<Array<Filme>> {
        return this.http.get<Array<Filme>>(`${this.filme_api_url}/titulo-local/${titulo}`);
    }

    public getFilmesNaNuvem(titulo: string): Observable<Array<Filme>> {
        return this.http.get<Array<Filme>>(`${this.filme_api_url}/titulo-nuvem/${titulo}`);
    }

    public getFilmePorId(imdbId: string): Observable<Filme> {
        return this.http.get<Filme>(`${this.filme_api_url}/id-nuvem/${imdbId}`);
    }
}