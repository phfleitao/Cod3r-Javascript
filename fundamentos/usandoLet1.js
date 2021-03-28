//let respeita escopo global, escopo de função e escopo de bloco

// let respeita o conceito de escopo
var numero = 1
{
    let numero = 2
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)