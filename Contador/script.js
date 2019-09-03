function contar(){
    //Inicia a variavel de cada campo
    var ini = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var pas = document.getElementById('txtpasso')
    var res = document.getElementById('res')

    //Verifica se os campos estão preenchidos 
    if (ini.value.length ==0|| fim.value.length == 0 || pas.value.length == 0){
        window.alert('[Erro] Faltam dados!')
    }else{ //Se tiver tudo OK ele vai contar

        res.innerHTML = 'Contando ...' 
        let i  = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)

        if ( i < f){//contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449} ` 
            }
        }else{//contagem decrescente
            for(let c = i ; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`

        
    }
}