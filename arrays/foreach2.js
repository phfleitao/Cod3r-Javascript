Array.prototype.forEach2 = function(callback){
    for (let index = 0; index < this.length; index++) {
        callback(this[index], index, this)
    }
}

const aprovados = ['Carina', 'Julia', 'Lucas', 'Beatriz', 'Lucia']

//ForEach2 criado 
aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})