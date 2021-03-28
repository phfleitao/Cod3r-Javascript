//Hoisting, significa um comportamento padrão de mover 
//as declarações para o topo

console.log('a =', a1)
var a1 = 2
console.log('a =', a1)

//Equivalente ao código acima é como o interpretador js faz

var a2
console.log('a =', a2)
a2 = 2
console.log('a =', a2)


//com let o hoisting não ocorre, nesse caso gera erro

//console.log('a =', a3) //Erro!
let a3 = 2
console.log('a =', a3)