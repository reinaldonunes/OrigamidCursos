"use strict";
// incorreto
function normalizar(texto) {
    return texto.trim().toLowerCase();
}
console.log(normalizar(" Design "));
console.log(normalizar(200));
//correto
function normalizar2(texto) {
    return texto.trim().toLowerCase();
}
console.log(normalizar2(" Design "));
//console.log(normalizar2(200)); não deixa executar, pois o tipo não confere com o definido na função
// OBSERVAÇÃO
// O Any só deve ser usado em caso de não sabermos classificar o tipo do nosso dado, ou quando ele poder vir de qualquer forma (como no retorno de uma API, por exemplo)
// deve-se evitar usá-lo ao máximo.
