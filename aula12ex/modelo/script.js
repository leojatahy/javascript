function carregar () {
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('div#imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuts = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuts}`

    if (hora < 12){
        img.innerHTML = `../fotos/tarde.png`
    }else if (hora < 18) {
        console.log('Boa tarde!')
    }else {
        img.src = `../fotos/noite.png`
    }
}


