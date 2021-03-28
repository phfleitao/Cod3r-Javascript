const nome = 'Pedro'
console.log(nome.charAt(4))
console.log(nome.charAt(5)) //não gera erro ... quando na verdade deveria hehe
console.log(nome.charCodeAt(2)) //código unicode ao dígito do índice 2
console.log(nome.indexOf('r')) //indice referente a letra r do nome

console.log(nome.substring(1)) //substring a partir do indice 1
console.log(nome.substring(0,3)) //substring 3 caracteres a partir do indice 0

console.log('Sr. '.concat(nome).concat('!'))
console.log('Sr. ' + nome + '!')
console.log(nome.replace('e', 3).replace('o', 0))

console.log('Ana,Maria,Pedro'.split(',')) //cria um array separando os itens pela virgula