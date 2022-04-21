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
function addTask() {
  const task = textoTarefa.value;
  if (task.length > 0) {
    const listItem = document.createElement('li');
    listItem.innerText = task;
    listItem.onclick = () => selectedItem(listItem);
    listItem.ondblclick = () => completedItem(listItem);

    listaTarefas.appendChild(listItem);
    textoTarefa.value = '';
  }
}

criaTarefa.onclick = addTask;

// Limpa todas as tarefas da lista
function cleanAllTasks() {
  const tasks = document.querySelectorAll('#lista-tarefas li');
  for (let index = 0; index < tasks.length; index += 1) {
    listaTarefas.removeChild(tasks[index]);
  }
}

const apagaTudo = document.getElementById('apaga-tudo');
apagaTudo.onclick = cleanAllTasks;

// Remove todas as tarefas finalizadas
function removeCompletedTask() {
  const completedTask = document.querySelectorAll('.completed');
  for (let index = 0; index < completedTask.length; index += 1) {
    listaTarefas.removeChild(completedTask[index]);
  }
}

const apagaTarefaCompleta = document.getElementById('remover-finalizados');
apagaTarefaCompleta.onclick = removeCompletedTask;
