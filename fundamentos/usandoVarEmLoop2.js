const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i)
    })
}

//var não respeita escopo, com isso as funções não armazenam 
//o i no momento em que a função é criada e ele acba repetindo o i final
//no caso o numero 10
funcs[2]()
funcs[8]()