function fillData(data: {
  name: string
  price: number
  keyboard: boolean
}){
  document.body.innerHTML += `
    <div>
      <h2>${data.name}</h2>
      <p>R$ ${data.price}</p>
      <p>Inclui teclado: ${data.keyboard ? "Yes": "No"}</p>
    </div>
  `;
}

fillData({
  name: "Computador",
  price: 2000,
  keyboard: true,
})

fillData({
  name: "Notebook",
  price: 2000,
  keyboard: true,
})


// Type 
type NumberOrString = string | number;

let total: NumberOrString = 20

total = 30

type Product = {
  name: "Macbook",
  price: 2000,
  keyboard: true,
};

const computer: Product = {
  name: "Macbook",
  price: 2000,
  keyboard: true,
}

fillData(computer)


///////////////////////////////////

type Categories = 'design' | 'código' | 'descod'

function printCategory(category: Categories){
  if(category === 'design'){
    console.log("Fazer layout no Figma.")
  }
}

printCategory('design')


///////////////////////////////////

interface InterfaceProduct{
  name: string;
  price: number;
  keyboard: boolean;
}

// recomenda-se utilizar o type quando precisa definir os tipos primitivos, e interface quando se trabalhará com tipagem de objetos.