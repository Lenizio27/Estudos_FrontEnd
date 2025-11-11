let array = [1,2,3,4,5,6,7,8,9,10];

function callBackArray(a, operacao){
    let total = operacao(a)
    console.log(total)
}

function dobrar(a){
    return a.map(a => a * 2)
}

callBackArray(array, dobrar)