const listaTarefas = document.getElementById('lista-tarefas');
const textoTarefa = document.getElementById('texto-tarefa');
const criaTarefa = document.getElementById('criar-tarefa');

// Altera a classe da  li ao clicar sobre ela
function selectedItem(element) {
  const selected = document.querySelector('.selected-item');
  if (selected) selected.classList.remove('selected-item');

  element.classList.add('selected-item');
}

// Se for clicado duas vezes ele será marcado como completo
function completedItem(element) {
  if (element.className.includes('completed')) {
    element.classList.remove('completed');
    return;
  }
  element.classList.add('completed');
}

// Adiciona item na lista de tarefas
function adicionarTarefa() {
  const tarefa = textoTarefa.value;
  if (tarefa.length > 0) {
    const listItem = document.createElement('li');
    listItem.innerText = tarefa;
    listItem.onclick = () => selectedItem(listItem);
    listItem.ondblclick = () => completedItem(listItem);

    listaTarefas.appendChild(listItem);
    textoTarefa.value = '';
  }
}

criaTarefa.onclick = adicionarTarefa;
