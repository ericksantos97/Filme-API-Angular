import { Usuario } from "./usuario.model";

export class Token {
    token: string;
    usuario: Usuario = new Usuario();
    data_criacao: string;
}