let num = [5, 8, 2, 9, 3]

num.push(1) // Adiciona o valor a última posilção do vetor
console.log(num)
console.log(num.sort()) // Alterado para sequência crescente
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

// Função FOR para mostrar o vetor:

for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

// Jeito simplificado de mostrar o vetor com for:

for (let pos in num) {
    console.log(num[pos])
}
console.log('Fim.')

console.log(num.indexOf(9))// Mostra em que posição do vetor o número entre parênteses está.
// Se a função retornar -1, significa que o número que está sendo procurado não foi encontrado.