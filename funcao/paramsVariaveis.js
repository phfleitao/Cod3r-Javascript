function soma() {
    //arguments é um array padrão que toda função tem 
    //onde podemos acessar os parametros passados
    // Essa é uma forma "OldSchool" hehe
    
    let soma = 0;
    for(let i in arguments){
        soma += arguments[i];
    }
    return soma;
}

console.log(soma());
console.log(soma(1));
console.log(soma(1.1, 2.2, 3.3, 4.4));
console.log(soma(1.1, 2.2, ' Nome: ', 'Pedro')); //concatena quando tiver string
console.log(soma('a', 'b', 'c'));