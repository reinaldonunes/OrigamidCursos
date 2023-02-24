"use strict";
function fillData(data) {
    document.body.innerHTML += `
    <div>
      <h2>${data.name}</h2>
      <p>R$ ${data.price}</p>
      <p>Inclui teclado: ${data.keyboard ? "Yes" : "No"}</p>
    </div>
  `;
}
fillData({
    name: "Computador",
    price: 2000,
    keyboard: true,
});
fillData({
    name: "Notebook",
    price: 2000,
    keyboard: true,
});
let total = 20;
total = 30;
const computer = {
    name: "Macbook",
    price: 2000,
    keyboard: true,
};
fillData(computer);
function printCategory(category) {
    if (category === 'design') {
        console.log("Fazer layout no Figma.");
    }
}
printCategory('design');
// recomenda-se utilizar o type quando precisa definir os tipos primitivos, e interface quando se trabalhará com tipagem de objetos.
