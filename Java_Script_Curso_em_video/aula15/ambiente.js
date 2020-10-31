let num = [1, 4, 2, 7, 8, 6]
num.push(9)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1) {
    console.log('Valor não encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}
