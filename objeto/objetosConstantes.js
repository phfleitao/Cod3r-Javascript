//pessoa  -> 123 -> { ... }
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa -> 456 -> {...}
//pessoa = { nome: 'Carina' } //gera erro pois não pode criar novamente um objeto constante

Object.freeze(pessoa) //torna o objeto e seus valores realmente constantes, ou seja, não poderão ser modificados

pessoa.nome = 'Julia'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

//cria diretamente o objeto constante, ou seja, seus valores não poderão ser modificados
const pessoaConstante = Object.freeze({ nome: 'Beatriz' })
console.log(pessoaConstante)