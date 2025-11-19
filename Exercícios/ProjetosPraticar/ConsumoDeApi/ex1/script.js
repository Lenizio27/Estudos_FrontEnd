let inNome = document.getElementById("inNome");
let btVerificar = document.getElementById("btVerificar");
let resultado = document.getElementById("resultado");

async function descobrirIdade(text){
    resultado.textContent = "carregando..."
    let nome = text.value.toLowerCase();
    let url = (`https://api.agify.io/?name=${nome}`);
    try{
        setInterval(() => {
            fetch(url).then(resp => resp.json()).then(data => {
                resultado.textContent = ""
                for(let x in data){
                    resultado.textContent += `${x}: ${data[x]} \n` 
                }
            })
        }, 2000);
    }catch{
        resultado.textContent = "Houve um erro inesperado"
    }
}

btVerificar.addEventListener("click", ()=> descobrirIdade(inNome))