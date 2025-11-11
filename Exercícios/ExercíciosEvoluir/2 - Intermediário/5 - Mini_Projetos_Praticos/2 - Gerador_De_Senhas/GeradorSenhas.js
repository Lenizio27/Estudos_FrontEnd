let outSenha = document.getElementById("outSenha");
let btCriar = document.getElementById("btCriar");
let caracterSenha = "123456789!@#$%^&*?abcdefghijklmnopqrstuvwxyz";

btCriar.addEventListener("click", ()=>{
    let senha = "";
    for(let i = 0; i < 12; i++){
        let nRandom = Math.floor(Math.random() * caracterSenha.length)
        senha += nRandom > (Math.floor(caracterSenha.length / 2)) ? caracterSenha[nRandom] : caracterSenha[nRandom].toUpperCase()
    }
    outSenha.textContent = `sua senha: ${senha}`;
})

console.log(caracterSenha)