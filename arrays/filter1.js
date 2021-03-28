const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false},
]

//Modo 1
const produtosFiltrados1 = produtos.filter(function(p){
    return p.preco > 500 && p.fragil
})
console.log(produtosFiltrados1)

//Modo 2
const maiorQue500 = produto => produto.preco > 500
const fragil = produto => produto.fragil

const produtosFiltrados2 = produtos.filter(maiorQue500).filter(fragil)
console.log(produtosFiltrados2)