function verificar(n1){
    if((n1 % 3 === 0) && (n1 % 5 ===0)){
        console.log(`o numero e divisivel por 3 e 5`)
    }else{
        console.log(`nao e divisivel por 3 e 5 ao mesmo tempo`)
    }
}
verificar(15)