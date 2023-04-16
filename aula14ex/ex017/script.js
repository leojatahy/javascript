function tabuada(){
    var num = document.querySelector('#txtn')
    var tab = document.querySelector('#seltab')
    if(num.value.length <= 0 ){
        window.alert('[ERRO] digite algum numero valido')
    }else {
         let n = Number(num.value)
         tab.innerHTML=''
        for(let x=1 ;x<= 10 ; x+=1){
            let item = document.createElement('option')
            tab.appendChild(item)
            item.text = `${n} x ${x} = ${n*x}`
        }
    }
}