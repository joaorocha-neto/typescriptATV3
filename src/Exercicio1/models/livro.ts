export class livro{
    titulo: string;
    autor: string;
    anoPublicacao: number;
    estaDisponivel: boolean;


    constructor(titulo: string, autor: string, anoPublicacao: number, estaDisponivel: boolean) {
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicacao = anoPublicacao;
    this.estaDisponivel = estaDisponivel;

    }

    emprestar() : boolean {
        if (this.estaDisponivel === true){
            this.estaDisponivel = false;
            return true
        }

        else{
            return false;
        }

    }

    devolver() : boolean {
        if (this.estaDisponivel === false){
            this.estaDisponivel = true;
            return true
        }

        else {
            return false
        }
    }

}