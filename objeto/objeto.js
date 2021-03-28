//coleção dinâmica de pares chave/valor
const  produto = new Object
produto.nome = 'cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 84000,
    proprietario: {
        nome: 'Pedro',
        idade: 32,
        endereco: {
            logradouro: 'Rua A',
            numero: 123
        }
    },
    condutores:[{
        nome: 'Pedro',
        idade: 32
    },{
        nome: 'Carina',
        idade: 33
    }],
    calcularValorSeguro: function(){
        //..
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Avenida A'

console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro

console.log(carro)
console.log(carro.condutores)
//console.log(carro.condutores.length) //gerará erro,  pois não  pode acessar um atributo de um objeto não definido dentro de outro objeto
