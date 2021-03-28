//par chave/valor
const saudacao = 'Opa' //Contexto léxico 1

function exec(){
    const saudacao = 'Falaaa' //Contexto léxico 2
    return saudacao
}

//objetos são grupos aninhados de pares chave/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua dos alfeneiros',
        numero: 4
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
