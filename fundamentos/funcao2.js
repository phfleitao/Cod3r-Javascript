console.log('Armazenando uma funcao anonima em uma variavel')
const imprimirSoma = function(a, b){ 
    console.log(a + b)
}

imprimirSoma(2, 3)

console.log('\nArmazenando uma funcao arrow em uma variavel')
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

console.log('\nRetorno implícito') //quando não tem as chaves
const subtracao = (a, b) => a - b

console.log(subtracao(5,3))

console.log('\nRetorno implícito - com 1 parametro') //pode remover os parenteses tb
const elevarQuadrado = a => Math.pow(a, 2)

console.log(elevarQuadrado(4))