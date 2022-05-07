const tarefas = [
  {
    titulo: 'Passear com o cachorro',
    concluida: false,
  },
  {
    titulo: 'Lavar a louca',
    concluida: true,
  },
  {
    titulo: 'Fazer as compras',
    concluida: false,
  },
];

function filtrarConcluidas() {
  const tarefa = tarefas.filter((tarefas) => tarefas.concluida === true);
  return tarefa;
}

function filtrarIncompletas() {
  const tarefa = tarefas.filter((tarefas) => tarefas.concluida === false);
  let cont = tarefa.length;

  return cont;
}

console.log(filtrarIncompletas());
