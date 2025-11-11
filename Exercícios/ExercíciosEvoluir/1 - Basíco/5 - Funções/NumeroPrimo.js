function PrimalNumber(n1){
    if(n1 <= 0){
        console.log(`${n1} nao e um numero primo`)
        return
    }
    let m = 0;
    for(let i = 0; i <= n1; i++){
        if(n1 % i === 0){
            m++
        }
    }
    if(m > 2){
        console.log(`${n1} nao e um numero primo`)
    }else{
        if(m === 1){
            console.log("nao e primo")
            return
        }
        console.log(`${n1} e um numero primo`)
    }
}

PrimalNumber(5)