//Função em JS é First-Class Object (Citizens)
//Higher-order function

//criar de forma literal
function fun1() { }

//armazenar em uma variável
let fun2 = function() { }

//armazenar em um array
let array = [function(a,b) { return a + b }, fun1, fun2];

//executar a funcão de um array
let arrayExec = array[0](2,3);
console.log(arrayExec);

//armazenar em um atributo de um objeto
let obj = {};
obj.falar = function() { return 'Opa'; }
console.log(obj.falar());

//passar funcao como parametro de outra função
function run(fun){
    fun();
}
run(function() { console.log('Executando ...'); });

//Uma função pode retornar/conter uma função
function soma(a, b) {
    return function(c) {
        console.log(a + b + c);
    }
}
//invocando
soma(2,3)(4); //o resultado da soma(2,3) é uma funcao que recebe um parametro, por isso tem essa outra chamada, soma(2, 3)(4)

//quebrando a invocaçao para um melhor entendimento
let fsoma = soma(2, 3); //retorna uma function
fsoma(4);