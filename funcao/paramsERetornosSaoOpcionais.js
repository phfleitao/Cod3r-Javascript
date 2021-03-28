function area(largura, altura){
    let area = largura * altura;
    if(area > 20){
        console.log(`Valor acima do permitido: ${area}m2.`);
    } else {
        return area;
    }
}

console.log(area(2,2));
console.log(area(2)); //NaN
console.log(area()); //NaN
console.log(area(2, 3, 17, 22, 44)); // vai utilizar apenas os 2 primeiros
console.log(area(5, 5)); //o retorno da funcao é undefined