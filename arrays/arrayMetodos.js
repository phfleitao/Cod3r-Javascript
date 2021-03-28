const pilotos = ['Vettel','Alonso','Raikkonen','Massa']
pilotos.pop() //remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') //adiciona no final do array
console.log(pilotos) 

pilotos.shift() //remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') //adiciona no inicio do array
console.log(pilotos) 

//Splice - Adicionar a partir de um indice
pilotos.splice(2, 0, 'Bottas', 'Massa') //adiciona no inicio do array
console.log(pilotos)

//Splice - Remover a partir de um indice
pilotos.splice(3, 1) //adiciona no inicio do array
console.log(pilotos)

//Slice - gerar novo array
const algunsPilotos1 = pilotos.slice(2) //array a partir do indice >= 2
console.log(algunsPilotos1)

//Slice - gerar novo array 2
const algunsPilotos2 = pilotos.slice(1, 4) //array a partir do indice >= 1 e < 4
console.log(algunsPilotos2)