let total: string | number = 200

total = "4000"


function isNumber(value: string | number){
  if (typeof value === "number"){
    return true;
  }
}

console.log(isNumber(20))