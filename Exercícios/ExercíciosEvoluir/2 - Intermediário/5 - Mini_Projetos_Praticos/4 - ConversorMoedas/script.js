let selectMoeda = document.getElementById("selectMoeda");
let btCalcular = document.getElementById("btCalcular");
let inputUserValue = document.getElementById("inputUserValue");
let outResp = document.getElementById("outResp");

async function buscarMoedas() {
    const resposta = await fetch("https://economia.awesomeapi.com.br/xml/available");
    const textoXML = await resposta.text();

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(textoXML, "text/xml");

    const moedas = xmlDoc.documentElement.children;

    for (let i = 0; i < moedas.length; i++) {
        const tag = moedas[i];
        const nomeTag = tag.tagName;

        const option = document.createElement("option");
        option.textContent = nomeTag;
        option.value = nomeTag;
        selectMoeda.append(option);
    }
}

buscarMoedas();


async function consumirApi(){
    let valorOption = selectMoeda.value;  // ← pega o valor da moeda escolhida

    const URL = `https://economia.awesomeapi.com.br/json/last/${valorOption}`;

    const resposta = await fetch(URL);
    const dados = await resposta.json();

    // O objeto da API tem a chave igual à moeda sem hífen
    // Ex: USD-BRL vira USDBRL
    let chave = valorOption.replace("-", "");

    const info = dados[chave];

    console.log("Moeda:", valorOption);
    console.log("Nome:", info.name);
    console.log("Compra:", info.bid);
    console.log("Venda:", info.ask);

    let valueUser = Number(inputUserValue.value)
    let conversao = valueUser * info.ask;
    console.log(conversao)
    outResp.textContent = `seu valor: R$${conversao.toFixed(2)}`;

    return info; // ← retorna para usar no cálculo
}


btCalcular.addEventListener("click", consumirApi)
