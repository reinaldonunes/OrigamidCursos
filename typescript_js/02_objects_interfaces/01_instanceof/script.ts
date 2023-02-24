// REVISÃO DE CLASSES EM JS
class Produto{
  nome: string;

  constructor(nome: string){
    this.nome = nome;
  }
}

class Livro extends Produto{
  autor: string;
  constructor(nome: string, autor :string){
    super(nome);
    this.autor = autor;
  }
}

class Jogo extends Produto{
  jogadores: number;
  constructor(nome:string, jogadores:number){
    super(nome);

    this.jogadores = jogadores;
  }
}

function buscarProduto(busca: string){
  if(busca === 'O Hobbit'){
    return new Livro('O Hobbit', 'J. R. R. Tolkien');
  }

  if(busca === "Dark Souls"){
    return new Jogo('Dark Souls', 1);
  }
}


const produto = buscarProduto("O Hobbit");

if(produto instanceof Livro){
  console.log(produto.autor);
}


const jogo = buscarProduto("Dark Souls");

if(jogo instanceof Jogo){
  console.log(jogo.jogadores);
}


// INSTANCEOF verifica se aquele objeto ou dado é do tipo da classe que cria ele.
// INTERFACE verifica se o objeto ou dado segue o formato do tipo definido para ele.

// EXERCÍCIO

const link = document.getElementById('origamid');

if(link instanceof HTMLAnchorElement){
  link.href = link.href.replace("http://","https://");
}