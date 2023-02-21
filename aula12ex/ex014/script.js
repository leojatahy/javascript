function carregar() {
var msg = document.getElementById ('text')
var img = document.getElementById('imag')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas.`
if (hora >=0 && hora < 12) {  
    //BOM DIA  
    img.src = 'manha.png'
    document.body.style.background = '#BFA145'
}else if (hora >= 12 && hora <= 18){
    //BOA TARDE
    img.src = 'tarde.png'
    document.body.style.background = '#8C4A23'
}else {
    //BOA NOITE
    img.src = 'noite.png'
    document.body.style.background = '#021C26'
}
}
