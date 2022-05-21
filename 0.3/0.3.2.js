const tarefas = [
  {
    titulo: 'Passear com o cachorro',
    concluida: false,
    dias: 10,
  },
  {
    titulo: 'Lavar a louca',
    concluida: true,
    dias: 5,
  },
  {
    titulo: 'Fazer as compras',
    concluida: false,
    dias: 60,
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

function filtrarTempoConlusao() {
  const dias = tarefas.some((tempo) => tempo.dias < 30);
  return dias;
}

console.log(filtrarTempoConlusao());
