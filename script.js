const listaTarefas = document.getElementById('lista-tarefas');
const textoTarefa = document.getElementById('texto-tarefa');
const criaTarefa = document.getElementById('criar-tarefa');

// Altera a cor de fundo das li's ao clicar sobre elas
function listBackgroundColor(element) {
  element.style.backgroundColor = 'gray';
}

// Adiciona item na lista de tarefas
function adicionarTarefa() {
  const tarefa = textoTarefa.value;
  if (tarefa.length > 0) {
    const listItem = document.createElement('li');
    listItem.innerText = tarefa;
    listItem.onclick = () => listBackgroundColor(listItem);

    listaTarefas.appendChild(listItem);
    textoTarefa.value = '';
  }
}

criaTarefa.onclick = adicionarTarefa;
