//factory com parametros
function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Arroz', 3.20))
console.log(criarProduto('Feijão', 1.45))
console.log(criarProduto('Carne', 8.15))