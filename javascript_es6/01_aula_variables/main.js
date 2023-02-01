// Variables are responsible for saving data in memory.
// They can be three types: var, let and const.
// VAR is a global scope, this means that it can be accessed from anywhere of your application or functions
// LET is a local scope, this means that it can be accessed only in the current function where it was defined.
// CONST is an unmutable memory space, this means that after saving data, its value cannot be changed.

// EXAMPLE
var fullname = 'Arthur C. Clarke' // global

function aliasName(name){
  let aliasName = name // local

  return aliasName
}

const piMathConstant = 3.14159265359  //unmutable

//BEFORE CHANGES

console.log(fullname)
console.log(aliasName('Art'))
console.log(piMathConstant)


// AFTER CHANGES 
aliasName = 'Matthew'
piMathConstant = 55144141

console.log(fullname)
console.log(aliasName)
console.log(piMathConstant)


// ON CONSOLE WILL APPEAR
// Arthur C. Clark => Global
// Art => Let, but without changes on second part
// 3.14159265359 => Const, but with error on second part, cause by: 'Uncaught TypeError: invalid assignment to const >> piMathConstant <<