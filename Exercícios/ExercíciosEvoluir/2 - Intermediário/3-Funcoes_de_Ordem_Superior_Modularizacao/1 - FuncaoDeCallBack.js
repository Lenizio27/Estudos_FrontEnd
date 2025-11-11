function somarItems(a, b, operacao){
    let soma = operacao(a, b)
    console.log(soma)
}

function somar(x, y){
    return x + y;
}

somarItems(10, 20, somar);