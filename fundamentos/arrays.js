const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])

console.log(valores[4]) //elemento 4 não existe, não gera erro .... o valor é undefined

/*
Os indices 4 até o 5 não existem, 
o javascript cria esses elementos automaticamente vazios (undefined)
*/
valores[6] = 10 
console.log(valores)
console.log(valores.length)
console.log(valores[5])

//arrays são heterogeneos, aceitam mistura de tos os tipos, REQUER CUIDADO
//outra forma de inserir valores nos arrays, utilizando a funcão push
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

//para remover o ultimo índice do array
let itemRemovido = valores.pop()
console.log(`Item Removido: ${itemRemovido}`)
console.log(valores)

//para remover o valor de um indice específico
//importante: o indice continua existindo, porém vazio
delete valores[1]
console.log(valores)

//arrays são tipos objects
console.log(typeof valores);

