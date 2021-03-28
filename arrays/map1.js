//Map serve para transformar os elementos de um array 
//gerando ao final um novo array com mesmo tamanho.
//Não muda o array original

const nums = [1, 2, 3, 4, 5]

//Exemplo 1: a partir do array acima, buscar o dobro de todos os elementos
let resultado = nums.map(function(e){
    return e * 2
})
console.log(resultado)

//Exemplo 2: Maps encadeados
const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)