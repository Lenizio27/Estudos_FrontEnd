let listaNotas = [10, 9, 8, 7, 10];

function media(notas){
    console.log((notas.reduce((x, y) => x + y, 0)) / listaNotas.length)
}

media(listaNotas)