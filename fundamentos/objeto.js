//objeto no javascript é uma coleção de pares chave/valor
const prod1 = {}
prod1.nome = 'Celular ultra mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 //evitar atributos com espaço

console.log(prod1)


const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        prop1: 1,
        obj: {
            prop1: 4
        }
    }
}
console.log(prod2)

prod2.obj.obj.prop1 = 10
console.log(prod2)