let dobro

//função normal
dobro = function(a) {
    return 2 * a
}

//função arrow
dobro = (a) => {
    return 2 * a
}

//funcao arrow mais reduzida, funções de apenas 1 unica linha
dobro = a => 2 * a  //return implicito

//chamada a funcao
console.log(dobro(3))

//Outro exemplo
let ola

ola =  function() {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá'  //possui um param, mas o JS nao obriga a usa-lo, não recomendado, mas existe

console.log(ola())