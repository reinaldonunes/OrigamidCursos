const button = document.querySelector('button');
const config = document.querySelector('config');

if (button != null){
  button.click();
}
// ou
if(button){
  button.click();
}
// ou
button?.click();

// NULL ACONTECE QUANDO O OBJETO, ELEMENTO OU DADO NÃO EXISTE NEM FÍSICA NEM DIGITALMENTE

// UNDEFINED ACONTECE QUANDO O OBJETO, ELEMENTO OU DADO PODE EXISTIR, MAS AINDA NÃO ESTÁ ALOCADO EM MEMÓRIA

// Exemplo

interface Product{
  nome?: string; // está dizendo que a propriedade nome pode ou não existir dentro de Product
}

const livro: Product = {};
const jogo: Product = {
  nome: 'Ragnarok',
}

jogo.nome?.toLowerCase();
livro.nome?.toLowerCase();