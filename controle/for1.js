let contador = 1;
while (contador <= 10){
    console.log(`contador = ${contador}`);
    contador++;
}

//equivalente ao while acima, utilizando o for
for (let i = 0; i < 10; i++) {
    console.log(`i = ${i}`);
}

//for com array
let notas = [6.7, 6.5, 7.9, 7.7, 9.3];
for (let i = 0; i < notas.length; i++) {
    console.log(`nota = ${notas[i]}`); 
}