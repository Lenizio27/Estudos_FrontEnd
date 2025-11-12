let sectionConcluidas = document.getElementById("sectionConcluidas");
let asideTarefas = document.getElementById("asideTarefas");
let inputTarefa = document.getElementById("inputTarefa");
let btAdicionar = document.getElementById("btAdicionar");

let arrayTarefas = [];
let n = 0;

function criarTarefa() {
  if (inputTarefa.value === "") {
    alert("Informe um valor válido");
    return;
  }

  // Criação da nova tarefa
  n += 1;
  const valorTarefa = inputTarefa.value;
  const novaTarefa = { textTarefa: valorTarefa, indice: n, status: "pendente" };
  arrayTarefas.push(novaTarefa);

  // Criação dos elementos HTML
  const tarefa = document.createElement("div");
  const textInput = document.createElement("p");
  const lixeira = document.createElement("button");
  const concluida = document.createElement("button");

  tarefa.classList.add("tarefa");
  lixeira.classList.add("lixeira");
  concluida.classList.add("concluida");
  textInput.classList.add("textInput");

  textInput.textContent = novaTarefa.textTarefa;
  lixeira.textContent = "X";
  concluida.textContent = "✓";

  tarefa.append(textInput, lixeira, concluida);
  asideTarefas.append(tarefa);

  // Botão de concluir
  concluida.addEventListener("click", () => {
    sectionConcluidas.append(tarefa);
    tarefa.classList.add("feito");
    novaTarefa.status = "concluido";
  });

  // Botão de excluir
  lixeira.addEventListener("click", () => {
    tarefa.remove();
    arrayTarefas = arrayTarefas.filter(t => t.indice !== novaTarefa.indice);
  });

  console.log(arrayTarefas);
  inputTarefa.value = "";
}

btAdicionar.addEventListener("click", criarTarefa);
