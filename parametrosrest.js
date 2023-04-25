function add(...valores){
    let tam = valores.length
    let res = 0
    for (c of valores){
        let soma = res+=c
        console.log(soma)
    }
}


function check(age){
    if (age < 18){
        console.log('este conteúdo é para maiores de 18 anos, deseja prosseguir?')
    }else{
        console.log('boa experiência')
    }
}

const f = function(...valores){
    let res=0
    for(c of valores){
        res+=c
    }
    return res
}


const nova_funcao = Function("v1", "v2", "return v1+v2")
console.log(f(10, 3))