"use strict";
const button = document.querySelector('button');
const config = document.querySelector('config');
if (button != null) {
    button.click();
}
// ou
if (button) {
    button.click();
}
// ou
button?.click();
const livro = {};
const jogo = {
    nome: 'Ragnarok',
};
jogo.nome?.toLowerCase();
livro.nome?.toLowerCase();
