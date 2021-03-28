function getPreco(imposto = 0, moeda = 'EUR'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 49990, desc: 0.20 }

//Call e Apply
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

//a diferença entre os dois está na passagem dos parametros
console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(carro, [0.17, '$']))