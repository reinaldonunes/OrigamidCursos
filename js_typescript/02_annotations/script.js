"use strict";
const product = "The Last World";
let product_2 = "Jurassic Park";
let price = 89.8;
// Erro, pois foi atribuido uma constante, ou seja, seu valor não pode ser alterado.
//product = "Jurassic Park"
product_2 = "Scythe"; // tudo certo, pois o tipo LET possibilita alteração de valor durante a execução.
// como a constante já está recebendo os dados, não precisa ser anotado qual o seu tipo, pois o TS fará a inferencia direta.
const car = {
    brand: "Audi",
    doors: 5
};
// no caso de funções, que não sabemos qual valor vai entrar, temos que informar a tipagem.
function sum(a, b) {
    return a + b;
}
sum(1, 3);
// Trabalhando com objetos e conversões
const nintendo = {
    name: "Nintendo",
    price: "200.10"
};
function parsePrice(product) {
    return product.price = "R$ " + product.price;
}
const newProduct = parsePrice(nintendo);
console.log(newProduct);
