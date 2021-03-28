function compras(trabalho1, trabalho2){
    let comprarSorvete = trabalho1 || trabalho2
    let comprarTv50 = trabalho1 && trabalho2
    //let comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise (xor)
    let comprarTv32 = trabalho1 != trabalho2  //a diferença simula o ou exclusivo
    let manterSaudavel = !comprarSorvete //Unário

    //retornando em forma de um objeto
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
