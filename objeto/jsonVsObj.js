const obj = { a: 1, b: 2, c: 3, soma(){ return a + b + c } }

const jsonStr = JSON.stringify(obj)
console.log(jsonStr)
const jsonObj = JSON.parse(jsonStr)
console.log(jsonObj)