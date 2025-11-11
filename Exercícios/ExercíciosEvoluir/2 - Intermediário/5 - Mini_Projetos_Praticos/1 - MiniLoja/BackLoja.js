let produtos = document.getElementById("produtos")
let selectItem = document.getElementById("selectItem")
let btAdicionar = document.getElementById("btAdicionar")
let btTotal = document.getElementById("btTotal")
let carrinhoCompras = document.getElementById("carrinhoCompras")


// Arrays e Objetos

let tiposProdutos = [
    {Eletronico: Math.ceil(Math.random() * 500)},
    {Varejo: Math.ceil(Math.random() * 100)},
    {Cosmetico: Math.ceil(Math.random() * 300)},
    {Alimento: Math.ceil(Math.random() * 50)}
];

let carrinho = [];
let chavesProdutos = [];

function AdicionarCarrinho(item){
    let produtoSelecionado = item.value;
    chavesProdutos = [];

    // Aprendizado For in e For of

    for (let i in tiposProdutos) {
        chavesProdutos.push(Object.keys(tiposProdutos[i]));
        if (chavesProdutos[i][0] === produtoSelecionado) {
            carrinho.push(tiposProdutos[i]);
        }
    }

    let carrinhoX = "";
    for (const produto of carrinho) {
        for (const chave in produto) {
            carrinhoX += `${chave}: R$${produto[chave]} | `;
        }
    }

    carrinhoCompras.textContent = carrinhoX;
}

function calcularCarrinho(arrayCarrinho){
    let total = 0;
    for (const produto of arrayCarrinho){
        for (const chave in produto){
            total += produto[chave];
        }
    }
    alert(`Total: R$${total}`);
}


btAdicionar.addEventListener("click", ()=>  AdicionarCarrinho(selectItem))
btTotal.addEventListener("click", ()=>  calcularCarrinho(carrinho))