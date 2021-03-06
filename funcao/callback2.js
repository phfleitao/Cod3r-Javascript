const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//sem callback
let notasBaixas = []
for(let i in notas){
    if(notas[i] < 7)
        notasBaixas.push(notas[i])
}
console.log(notasBaixas)

//com callback
let notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})
console.log(notasBaixas2)

let notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

const notaMenorQue7 = nota => nota < 7
let notasBaixas4 = notas.filter(notaMenorQue7)
console.log(notasBaixas4)