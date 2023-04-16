function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')
  if (fano.value.length <= 3 || Number(fano.value) > ano )  {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  }else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.querySelector ('#img')
    if (fsex[0].checked) {
      gênero = 'Homem'
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute('src', '../fotos/bebem.jpg')
      }else if (idade < 21) {
      // jovem
      img.setAttribute('src', '../fotos/jovemm.jpg')
      }else if (idade < 50) {
        //adulto
        img.setAttribute('src', '../fotos/homem.jpg')
      }else {
        //idoso
        img.setAttribute('src', '../fotos/velho.jpg')
      }
    }else if (fsex[1].checked) {
      gênero = 'Mulher'
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute('src', '../fotos/bebef.jpg')
      }else if (idade < 21) {
      // jovem
      img.setAttribute('src', '../fotos/jovemf.jpg')
      }else if (idade < 50) {
        //adulto
        img.setAttribute('src', '../fotos/mulher.jpg')
      }else {
        //idoso
        img.setAttribute('src', '../fotos/senhora.jpg')
      }
    }
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
    res.appendChild(img) 
  }
}