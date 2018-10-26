import { DetalheFilme } from "./detalhar-filme.model";

export class Filme {
    imdbID: string;
	Title: string;
	Year: number;
	Poster: string;
	Detail: DetalheFilme = new DetalheFilme();
}