const aprovados = ['Carina', 'Julia', 'Lucas', 'Beatriz', 'Lucia']

//Modo 1
aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

//Modo 2
aprovados.forEach(nome => console.log(nome))

//Modo 3
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)