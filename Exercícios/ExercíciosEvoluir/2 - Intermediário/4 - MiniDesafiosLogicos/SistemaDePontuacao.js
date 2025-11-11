let outQuestions = document.getElementById("outQuestions");
let inRespostas = document.getElementById("inRespostas");
let btEnviar = document.getElementById("btEnviar");
let btChecar = document.getElementById("btChecar");
let formReset = document.getElementById("formReset");

let log = (a) => console.log(a);

let respostas = [];
let operadores = ["*", "/", "+", "-"];
let playerRespostas = [];
const calculos = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b
};

let tabuada = [];
function jogoMatematica(){
    
    for(let i = 0; i<= 10; i++){
        let nAleatorio = Math.floor(Math.random() * 4);
        let operador = operadores[nAleatorio]
        let n1 = Math.ceil(Math.random() * 10);
        let n2 = Math.ceil(Math.random() * 10);
        let operando = (calculos[operador](n1, n2)).toFixed(1);

        respostas.push(operando)
        tabuada.push(`${n1} ${operador} ${n2}`)
        console.log(respostas[i])
    }
    tabuada.map(a => {
        outQuestions.textContent += a + "\n" ;
    })
}

jogoMatematica()

function respostasUsuario(){
    if(playerRespostas.length === 10){
        window.confirm(`Respostas ja enviadas \n ${playerRespostas}`)
        return
    }
    let respostasUsuario = Number(inRespostas.value)
    playerRespostas.push(respostasUsuario)
    formReset.reset()
}
btEnviar.addEventListener("click", respostasUsuario)

let PP = 0;
let PN = 0;

let correcao = [];
function checarPontos(){
    if(correcao.length >= 8){
        console.log("nao pode")
        return
    }
    for(let i = 0; i < 10; i++){
        correcao.push(playerRespostas[i] == respostas[i] ? `correta`  : "incorreta");
    }
    correcao.map(a => outQuestions.textContent += a + "\n");
    correcao.map(a => a == "correta" ? PP += 10 : PN += 5);
    total = PP - PN;
    console.log(total)
}

btChecar.addEventListener("click", checarPontos)

// Versao corregida GPT

/*
let outQuestions = document.getElementById("outQuestions");
let inRespostas = document.getElementById("inRespostas");
let btEnviar = document.getElementById("btEnviar");
let btChecar = document.getElementById("btChecar");
let formReset = document.getElementById("formReset");
let respostas = [];
let operadores = ["*", "/", "+", "-"];
let playerRespostas = [];

const calculos = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
};

let tabuada = [];

function jogoMatematica() {
    for (let i = 0; i < 10; i++) {
        const operador = operadores[Math.floor(Math.random() * 4)];
        let n1 = Math.ceil(Math.random() * 10);
        let n2 = Math.ceil(Math.random() * 10);
        if (operador === "/" && n2 === 0) n2 = 1;
        
        const resultado = Number((calculos[operador](n1, n2)).toFixed(1));
        respostas.push(resultado);
        tabuada.push(`${n1} ${operador} ${n2}`);
    }
    
    outQuestions.textContent = tabuada.join("\n");
}
jogoMatematica();

function respostasUsuario() {
    const resposta = Number(inRespostas.value);
    if (!inRespostas.value) {
        alert("Digite um valor antes de enviar!");
        return;
    }
    if (playerRespostas.length >= 10) {
        alert(`Você já enviou todas as respostas.\n${playerRespostas.join(", ")}`);
        return;
    }
    playerRespostas.push(resposta);
    formReset.reset();
}
btEnviar.addEventListener("click", respostasUsuario);

let PP = 0;
let PN = 0;
let correcao = [];

function checarPontos() {
    if (correcao.length > 0) {
        alert("Você já checou as respostas.");
        return;
    }
    
    if (playerRespostas.length < 10) {
        alert("Responda todas as perguntas antes de checar!");
        return;
    }
    
    for (let i = 0; i < 10; i++) {
        if (playerRespostas[i] === respostas[i]) {
            correcao.push("correta");
            PP += 10;
        } else {
            correcao.push("incorreta");
        PN += 5;
    }
}

const total = PP - PN;
outQuestions.textContent += "\n\nResultados:\n" + correcao.join("\n") + `\n\nPontuação final: ${total}`;
console.log("Pontuação final:", total);
}
btChecar.addEventListener("click", checarPontos);

*/