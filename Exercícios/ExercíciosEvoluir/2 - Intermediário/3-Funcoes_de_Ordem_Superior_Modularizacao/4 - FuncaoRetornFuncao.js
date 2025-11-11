function multiplarPor(x){
    return function(y){
        return x * y;
    }
}

let dobrar = multiplarPor(2);

console.log(dobrar(5));

// Utilizando arrow functions

let dobrando = x => y => x + y;

console.log(dobrando(10)(12))