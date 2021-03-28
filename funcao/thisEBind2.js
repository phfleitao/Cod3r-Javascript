//Opção errada
function PessoaErro() {
    this.idade = 0
    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new PessoaErro

//Opção com Bind
function PessoaComBind() {
    this.idade = 0
    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}

new PessoaComBind

//Opção sem o uso do bind
function PessoaSemBind() {
    this.idade = 0

    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }, 1000)
}

new PessoaSemBind