function contar(){
    var inic = document.querySelector('#txti')
    var pas = document.querySelector('#txtp')
    var fin = document.querySelector('#txtf')
    var res = document.querySelector('#res')
    if(inic.value.length == 0 || pas.value.length == 0 || fin.value.length == 0){
        window.alert('[ERRO] Faltam dados!')
    }else {
        res.innerHTML = 'contando:'
        let i = Number(inic.value)
        let p = Number(pas.value)
        let f = Number(fin.value)
        if(p<=0){
            p=1
        }
        if(i<f){
            // crescente
            for(let c=i;c<=f;c+=p){
                res.innerHTML += ` ${c} \u{1F493}`
            }
            
        }else {
            // decrescente
            for(let c= i; c>=f;c-=p)
            res.innerHTML += ` ${c} \u{1f493}`
        }
            res.innerHTML += `\u{1f3c1}`
    }
 
}
