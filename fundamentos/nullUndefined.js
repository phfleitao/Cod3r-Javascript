let valor //nao inicializada
console.log(valor)

valor = null //ausencia de valor
console.log(valor)
//gerará erro pois não é possível converter variáveis nulas
//console.log(valor.toString())  //Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //Evite atribuir undefined, deixe que a linguagem atribua quando for o caso.
console.log(!!produto.preco)
console.log(produto)

//para remover um atributo o correto seria o uso do delete ou a atribuição de null
produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)


delete produto.preco //remoção do atributo
console.log(produto)

let valor2
console.log(`Existe valor: ${!!valor2}`)

valor2 = null
console.log(`Existe valor: ${!!valor2}`)

//exemplo de if
if(!!valor2)
    console.log("A variável possui valor")
else
    console.log("A variável NÃO possui valor")

//outro exemplo
function isNullOrUndefined(value) {
    return !value
}

if(!isNullOrUndefined(valor2))
    console.log("A variável possui valor")
else
    console.log("A variável NÃO possui valor")
    
    