function Palindromo(palavra){
    palavra.toLowerCase()
    let nome = palavra.split("").reverse().join("")
    let checar = nome === palavra ? "Palindromo" : "nao e um Palindromo";
    console.log(checar)
}

Palindromo("ana")