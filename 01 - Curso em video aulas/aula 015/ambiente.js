let num = [8,30,40,67]

num.sort() //coloca em ordem crescente 

num.push(1) // coloca o numero desejado no ultimo elemento



console.log(num)

let pos = num.indexOf(40)
console.log(`o valor 40 está na posição ${pos}`)

console.log(`Nosso vetor é o ${num}`)

console.log(`o vetor tem, ${num.length} posições `)  // length=comprimento //

console.log(`o primeiro elemento do vetor é ${num[0]}`) // a posição do vetor começa em 0 e não em 1