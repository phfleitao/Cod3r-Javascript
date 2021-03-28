//var respeita escopo global e escopo de função


//variavel com var é acessível fora do escopo que não seja uma funcao,
//ou seja, não respeita escopo de bloco 
{
    {
        {
            { 
                var sera = 'Será????' 
            }
        }
    }
}
console.log(sera)

function teste(){
    var local = 123
    console.log(local)
}
//aqui não encontra a variavel local
//console.log(local)  //Erro!
