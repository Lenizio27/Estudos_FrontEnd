let inputProduto = document.getElementById("inputProduto");
let inputValor = document.getElementById("inputValor");
let btAdicionar = document.getElementById("btAdicionar");
let selectProduto = document.getElementById("selectProduto");

let estoqueProdutos = []

function adicionarEstoque(){
    let produto = inputProduto.value;
    let valor = Number(inputValor.value);
    if(produto === "" || isNaN(valor) || inputValor.value === ""){
        alert("Por favor, ensira valores validos")
        return
    }
    let selectOption = document.createElement("option");

    
    estoqueProdutos.push({"produto": produto, "valor": valor})
    
    for(let x in estoqueProdutos){
        selectOption.textContent = estoqueProdutos[x].produto.toLowerCase();
        selectOption.value = estoqueProdutos[x].produto.toLowerCase()
        selectProduto.append(selectOption);
    }
    
    inputProduto.value = "";
    inputValor.value = "";
    console.log(estoqueProdutos[0].produto);
}
btAdicionar.addEventListener("click", adicionarEstoque);

function modificarEstoque(){

}