let notas = [6.7, 6.5, 7.9, 7.7, 9.3];

for (let i in notas){ //a navegação ocorre sobre os indices
    console.log(`nota = ${notas[i]}`); 
}

let pessoa = {
    nome: 'Pedro',
    sobrenome: 'Leitao',
    idade: 31,
    peso: 70
}

for (let atributo in pessoa) { //no caso de 1 objeto, percorre seus atributos
    console.log(`${atributo} = ${pessoa[atributo]}`); 
}