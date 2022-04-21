const listaTarefas = document.getElementById('lista-tarefas');
const textoTarefa = document.getElementById('texto-tarefa');
const criaTarefa = document.getElementById('criar-tarefa');

// Adiciona item na lista de tarefas
function adicionarTarefa() {
  const tarefa = textoTarefa.value;
  if (tarefa.length > 0) {
    const listItem = document.createElement('li');
    listItem.innerText = tarefa;
    listaTarefas.appendChild(listItem);
    textoTarefa.value = '';
  }
}

criaTarefa.onclick = adicionarTarefa;
