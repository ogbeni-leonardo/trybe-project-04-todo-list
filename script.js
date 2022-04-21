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
function addTask(onload = false) {
  let task = textoTarefa.value;
  if (task.length > 0 || onload) {
    const listItem = document.createElement('li');
    listItem.innerText = task;
    listItem.onclick = () => selectedItem(listItem);
    listItem.ondblclick = () => completedItem(listItem);

    listaTarefas.appendChild(listItem);
    textoTarefa.value = '';
    return listItem;
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

// Salva tarefas no localstorage
function saveTasks() {
  if (typeof Storage == 'undefined') {
    alert('Sem suporte a Web Storage!');
    return;
  }

  const tasks = document.querySelectorAll('#lista-tarefas li');
  let savedTasks = [];
  for (let index = 0; index < tasks.length; index += 1) {
    const listItem = tasks[index];
    savedTasks.push([listItem.className, listItem.innerText]);
  }
  localStorage.setItem('tasks', JSON.stringify(savedTasks));
}

const salvaTarefas = document.getElementById('salvar-tarefas');
salvaTarefas.onclick = saveTasks;

// Verifica se tarefas foram salvas e então as aplica a lista de tarefas
function restoreTasks() {
  if (localStorage.tasks === undefined) return;
  const restoredTasks = JSON.parse(localStorage.getItem('tasks'));

  for (let index = 0; index < restoredTasks.length; index += 1) {
    const listData = restoredTasks[index];

    const listItem = addTask(true);
    listItem.className = listData[0];
    listItem.innerText = listData[1];
  }
}

window.onload = restoreTasks;
