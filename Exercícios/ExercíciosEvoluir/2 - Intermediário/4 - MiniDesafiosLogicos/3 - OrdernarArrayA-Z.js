let nomes = ["Gael", "Fabio", "Elena", "Diana", "Carlos", "Bruno", "Ana"];

function Ordenar(lista){
    lista.sort((a,b)=> a.localeCompare(b, 'pt-br'))
    console.log(lista)
}

Ordenar(nomes)