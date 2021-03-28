//desctructuring de um array unidimensional de um elemento
const [a] = [10]
console.log(a)

//desctructuring de um array unidimensional com varios elementos
const [n1, ,n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

//desctructuring de um array multidimensional
const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)

//desctructuring de um array em uma variavel
const lista = [10, 7, 9, 8]
console.log(lista)

let [i1, i2, , i4, i5 = 14] = lista
console.log(i1, i2, i4, i5)