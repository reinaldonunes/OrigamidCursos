const numeros = [10,20,30,40,50,60];
const valores = [10, "Taxas", 30, "Produtos", 50, 3.5];

function maiorQue10(data: number[]){
  return data.filter((n) => n > 10)
}

function filtrarValores(data: Array<number | string>){ // Forma alternativa de dizer que a Interface é um array
  return data.filter(item => typeof item === 'number')
}

console.log(filtrarValores(valores))
console.log(maiorQue10(numeros))


const dados = [
  ['Lord of Rings', 80],
  ['Game of Thrones', 120],
];
