let inicio = 1

function usando_for(v){
    for(inicio; inicio < v; inicio++){
        return inicio
    }
}
//console.log(usando_for(10))

function usando_while(i){
    while(inicio<i){
        console.log(inicio)
        inicio++
    }
}
usando_while(10)

function soma(x=2, y=5) {
    let s = x + y
    return s
}

//console.log(soma())