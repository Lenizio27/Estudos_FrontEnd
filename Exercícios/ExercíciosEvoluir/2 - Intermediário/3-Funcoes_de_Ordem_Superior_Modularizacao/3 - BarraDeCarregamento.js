let i = "";
let n = 0;
const loading = setInterval(() => {
    console.log(`[${i}] ${n * 10}%`)
    if(n === 10){
        clearInterval(loading)
        return
    }
    i += "=";
    n++
}, 1000)