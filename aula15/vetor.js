let num = [8,1,7,4,2,9]
console.log(num)
/*
for(let pos=0;pos< num.length;pos++){
    console.log(`A chave ${pos} tem o valor ${num[pos]}`)
}
*/

for(let pos in num) {
    console.log(`A chave ${pos} tem o valor ${num[pos]}`)
}