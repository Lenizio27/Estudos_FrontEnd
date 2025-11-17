let inputProduto = document.getElementById("inputProduto");
let inputValor = document.getElementById("inputValor");
let inputQuantidade = document.getElementById("inputQuantidade");
let btAdicionar = document.getElementById("btAdicionar");
let btVerificarEstoque = document.getElementById("btVerificarEstoque");
let selectProduto = document.getElementById("selectProduto");
let checandoEstoque = document.getElementById("checandoEstoque");
let btEstoqueTotal = document.getElementById("btEstoqueTotal");

let arrayEstoqueProdutos = []

function adicionarEstoque(){
    // conversao de valores
    let produto = inputProduto.value.toLowerCase();
    let valor = Number(inputValor.value);
    let quantidade = Number(inputQuantidade.value);
    // teste logico para valores inseridos
    if(produto === "" || isNaN(valor) || inputValor.value === "" || inputQuantidade.value === "" || isNaN(quantidade)){
        alert("Por favor, ensira valores validos")
        return
    }
    // criacao de elemento html
    let selectOption = document.createElement("option");

    arrayEstoqueProdutos.push({"produto": produto, "valor": valor, "quantidade": quantidade});
    
    // inserir option dentro do documento html
    for(let x in arrayEstoqueProdutos){
        selectOption.textContent = arrayEstoqueProdutos[x].produto.toLowerCase();
        selectOption.value = arrayEstoqueProdutos[x].produto.toLowerCase()
        selectProduto.append(selectOption);
    }
    
    inputProduto.value = "";
    inputValor.value = "";
    inputQuantidade.value = "";
    console.log(arrayEstoqueProdutos[0].produto);
}
btAdicionar.addEventListener("click", adicionarEstoque);


// Funcao Verificar Estoque

btVerificarEstoque.addEventListener("click", ()=> {
    checandoEstoque.textContent = ""
    let produto =  selectProduto.value;
    let divProdutoEstoque = document.createElement("div");
    let quantidadeProdutos = document.createElement("div");
    let valorTotalProdutos = document.createElement("div");
    let btAumentarEstoque = document.createElement("button");
    let btDiminuirEstoque = document.createElement("button");
    let tagH4 = document.createElement("h4");
    let tagP = document.createElement("p");

    btAumentarEstoque.value = "+"
    btDiminuirEstoque.value = "-"
    
    btAumentarEstoque.textContent = "+"
    btDiminuirEstoque.textContent = "-"
    
    if(produto === ""){
        alert("informe um produto do estoque")
        return
    }

    for(let x in arrayEstoqueProdutos){
        if(arrayEstoqueProdutos[x].produto === produto){
            tagH4.textContent = `Produto: ${arrayEstoqueProdutos[x].produto}`;
            tagP.textContent = `valor: ${arrayEstoqueProdutos[x].valor}`;
            quantidadeProdutos.textContent = `Quantidade em estoque: ${arrayEstoqueProdutos[x].quantidade}`;
            valorTotalProdutos.textContent = `valor total de estoque: ${arrayEstoqueProdutos[x].quantidade * arrayEstoqueProdutos[x].valor}`;
            let total
            let valorTotal = 0;
            btAumentarEstoque.addEventListener("click", ()=>modificarEstoque(+1))
            btDiminuirEstoque.addEventListener("click", ()=>modificarEstoque(-1))
            
            function modificarEstoque(valor){
                arrayEstoqueProdutos[x].quantidade += valor;
                quantidadeProdutos.textContent = `Quantidade em estoque: ${arrayEstoqueProdutos[x].quantidade}`;
                total = arrayEstoqueProdutos[x].quantidade * arrayEstoqueProdutos[x].valor 
                valorTotal = arrayEstoqueProdutos[x].quantidade * arrayEstoqueProdutos[x].valor; 
                valorTotalProdutos.textContent = `valor total de estoque: ${arrayEstoqueProdutos[x].quantidade * arrayEstoqueProdutos[x].valor}`;
                console.log(valorTotal)
            }
            divProdutoEstoque.append(tagH4, tagP)
            divProdutoEstoque.append(quantidadeProdutos,valorTotalProdutos ,btDiminuirEstoque, btAumentarEstoque)
            checandoEstoque.append(divProdutoEstoque)
        }
    }
})

btEstoqueTotal.addEventListener("click", ()=> {
    if(arrayEstoqueProdutos.length === 0){
        alert("Nenhum produto foi adicionado")
    }
    let totalEstoque = 0;
    for(let x in arrayEstoqueProdutos){
        totalEstoque += arrayEstoqueProdutos[x].valor * arrayEstoqueProdutos[x].quantidade
    }
    alert(totalEstoque)
})