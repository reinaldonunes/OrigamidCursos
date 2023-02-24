const phrase = "Front-end" //string
const price = 500 //number
const conditional = price > 500 //boolean
const vectors = [""]
const objected = {}
const nulled = null

//typeof verify type of variable or constant
if(typeof phrase === "string"){
  console.log("Phrase é uma STRING")
}
if(typeof price === 'number'){
  console.log("Price é um NUMBER")
}
if(typeof conditional === 'boolean'){
  console.log("Conditional é um BOOLEAN")
}

if(typeof vectors === 'object'){
  console.log("Vectors é um OBJECT")
}
if(typeof objected === 'object'){
  console.log("Objected é um OBJECT")
}
if(typeof conditional === 'boolean'){
  console.log("Nulled é um OBJECT")
}


// Constructors
const example = new String("Back-end")
const example2 = String("Full-stack")

console.log(typeof example)
console.log(typeof example2)