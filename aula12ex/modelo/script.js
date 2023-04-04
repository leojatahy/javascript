function carregar () {
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#foto')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        // bom dia
        img.src = `manha.jpg`
        document.body.style.background =`#748A8C`

    } else if (hora >= 12 && hora < 18) {
        // boa tarde
        img.src = 'tarde.jpg'  
        document.body.style.background =`#BF4A3F`
    } else {
        // boa noite
        img.src = 'noite.jpg'
        document.body.style.background =`#142426`
    }  

}

