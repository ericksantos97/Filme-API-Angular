import { Usuario } from "./usuario.model";
import { Filme } from "./filme.model";

export class Comentario {
    id: string;
    descricao: string;
    data: string;
    usuario: Usuario = new Usuario();
    filme: Filme = new Filme();
}