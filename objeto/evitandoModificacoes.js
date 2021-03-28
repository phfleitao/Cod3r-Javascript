//Object.preventExtensions (nao permite adicionar novas chaves valores)
const produto  = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promoção'
})

console.log('Extensivel:  ',  Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca' //não será aceita
delete produto.tag
console.log(produto)

//Object.seal - nao adiciona novos elementos e nem remove ... apenas altera elementos existentes
const pessoa = { nome: 'Pedro',  idade: 32 }
Object.seal(pessoa)
console.log('Selado',  Object.isSealed(pessoa))

pessoa.sobrenome = 'Leitão'
delete pessoa.nome
pessoa.idade = 30
console.log(pessoa)

//Object.freeze = selado + valores constantes