"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const livro_1 = require("./models/livro");
const Livro1 = new livro_1.livro("HP", "joao", 1990, true);
const Livro2 = new livro_1.livro("pino", "joao", 1900, false);
if (Livro1.emprestar()) {
    console.log(Livro1.titulo + " Emprestado");
}
else {
    console.log(Livro1.titulo + " Não emprestado");
}
// Tentando Denovo
if (Livro1.emprestar()) {
    console.log(Livro1.titulo + " Emprestado");
}
else {
    console.log(Livro1.titulo + " Não emprestado");
}
// Devolvendo o livro
if (Livro1.devolver()) {
    console.log(Livro1.titulo + " Devolvido");
}
else {
    console.log(Livro1.titulo + " Não devolvido");
}

if (Livro1.emprestar()) {
    console.log(Livro1.titulo + " Emprestado");
}
else {
    console.log(Livro1.titulo + " Não emprestado");
}
