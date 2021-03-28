//novo recurso do ES2015

const pessoa = {
    nome: 'Pedro',
    idade: 32,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

//usando o destructuring para extrair nome e idade do objeto
const {nome, idade} = pessoa
console.log(nome, idade)

//usando o destructuring para extrair nome e idade do objeto e mudar o nome da variavel
const {nome: n, idade: i} = pessoa
console.log(n, i)

//tentando utilizar propriedades inexistentes, no segundo caso bemHumorada
//seta um comportamento default caso seja undefined
const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

//no caso para extrair as propriedades de endereco
const { endereco: { logradouro, numero, cep }} = pessoa
console.log(logradouro, numero, cep) //cep undefined