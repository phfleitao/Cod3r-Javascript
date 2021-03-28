let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let x in nums){
    if(x == 5) break;
    console.log(`${x} = ${nums[x]}`);
}
console.log('Fim Break!\n');

for(let x in nums){
    if(x == 5) continue; //não sai do laço, apenas interompe o indice atual, como se fosse um ->NEXT
    console.log(`${x} = ${nums[x]}`);
}
console.log('Fim Continue!\n');

//A partir de um rótulo (NÃO USAR!!!! Difícil manutenção)
externo: for (let x in nums){
    for(let y in nums){
        if(x == 1 && y == 2) break externo;
        console.log(`Par = ${x}, ${y}`);
    }
}
console.log('Fim Rótulo!');