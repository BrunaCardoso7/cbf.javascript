function add(...valores){
    let tam = valores.length
    let res = 0
    for (c of valores){
        let soma = res+=c
        console.log(soma)
    }
}
add(2,  4, 5, 6)