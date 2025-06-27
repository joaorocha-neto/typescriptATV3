"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.livro = void 0;
class livro {
    constructor(titulo, autor, anoPublicacao, estaDisponivel) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.estaDisponivel = estaDisponivel;
    }
    emprestar() {
        if (this.estaDisponivel === true) {
            this.estaDisponivel = false;
            return true;
        }
        else {
            return false;
        }
    }
    devolver() {
        if (this.estaDisponivel === false) {
            this.estaDisponivel = true;
            return true;
        }
        else {
            return false;
        }
    }
}
exports.livro = livro;
