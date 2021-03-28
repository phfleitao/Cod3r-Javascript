//destructuring de array já passando valores padrão
function rand([min = 0, max = 1000]){
    if(min > max)
        [min, max] = [max, min] // recurso de atribuicão com a criacao de um
                                // novo array [max, min] e usando o destructing 
                                // para extrair da forma inversa

    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
} 

const lista = [50, 40]
console.log(rand(lista))
console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))
//console.log(rand()) //Erro!