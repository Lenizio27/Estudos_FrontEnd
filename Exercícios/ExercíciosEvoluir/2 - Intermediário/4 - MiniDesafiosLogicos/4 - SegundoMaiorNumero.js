let numeros = [10, 20, 15, 5, 25, 65, 49, 12];

function ordernarNumeros(array){
    array.sort((a, b) => a - b, 0).reverse();
    console.log(`array: ${array} \n segundo maior numero e: ${array[1]}`)
}

ordernarNumeros(numeros)