console.log(typeof Array, typeof new Array, typeof  [])

let aprovados = new Array('Bia','Carlos','Ana')
console.log(aprovados)

aprovados = ['Bia','Carlos','Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])    //undefined

aprovados[3] = 'Paulo' //adicao de novo elemento em posiçao específica
aprovados.push('Carina') //adicao de elemento sempre ao final
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] ===  undefined)

console.log(aprovados)

//Métodos Básicos (Sort - Ordenação)
aprovados.sort()
console.log(aprovados)

//coloca o indice como undefined mas não o remove e nem reordena
delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

//Métodos Básicos (Splice - Remove e adiciona elementos)
//Remove 1 elemento a partir do indice 1
aprovados = ['Bia','Carlos','Ana']
aprovados.splice(1, 1)
console.log(aprovados);

//Remove 0 elementos a partir do indice 1 e adiciona 2 registros
aprovados = ['Bia','Carlos','Ana']
aprovados.splice(1, 0, 'Elemento1', 'Elemento2')
console.log(aprovados);

