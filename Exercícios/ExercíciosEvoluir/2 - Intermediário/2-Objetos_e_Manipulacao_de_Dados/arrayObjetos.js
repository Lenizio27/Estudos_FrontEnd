let arrayObjetos = [
    {
        nome: "sabao",
        preco: 60
    },
    {
        nome: "queijo",
        preco: 55
    },
    {
        nome: "peixe",
        preco: 20
    },
    {
        nome: "sabao",
        preco: 10
    },
]

for (let x in arrayObjetos){
    if(arrayObjetos[x].preco > 50){
        console.log(arrayObjetos[x])
    }
}
console.log("============ Exercicio 3 ============")
// ============ Exercicios 3 ============

const total = arrayObjetos.reduce((acc, item) => {return acc + item.preco}, 0);
console.log(`Valos Total e ${total}`);

console.log("============ Exercicio 4 ============")
// ============ Exercicio 4 ============

for (let i in arrayObjetos){
    arrayObjetos[i].disponivel = true;
    console.log(arrayObjetos[i]) 
}

console.log("============ Exercicio 5 ============")
// ============ Exercicios 5 ============

let arrayNomes = [] 

function apenasNomes(array){
    for(let a in array){
        arrayNomes.push(array[a].nome)
    }
    console.log(arrayNomes)
}   

apenasNomes(arrayObjetos)
