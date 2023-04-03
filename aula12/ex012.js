// obter a hora atual
var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
// mensagem com a hora 
console.log(`Agora são exatamente ${hora}:${minutos} `)

// mensagem de período do dia
if (hora < 5){
    console.log('Boa madrugada!')
}else if (hora < 12 ) {
    console.log('Bom dia!')
}else if (hora < 18) {
    console.log('Boa tarde!')
}else {
    console.log('Boa noite!')
}