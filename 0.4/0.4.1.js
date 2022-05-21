const alunos = [
  {
    nome: 'Mathias',
    notas: [
      { cadeira: 'DW2', nota: 10 },
      { cadeira: 'BD2', nota: 7 },
    ],
  },
  {
    nome: 'Luiza',
    notas: [
      { cadeira: 'DW2', nota: 8 },
      { cadeira: 'BD2', nota: 8 },
    ],
  },
  {
    nome: 'Pedro',
    notas: [
      { cadeira: 'DW2', nota: 10 },
      { cadeira: 'BD2', nota: 10 },
    ],
  },
];

function obterMedia() {
  alunos.forEach((aluno) => {
    const soma = aluno.notas.reduce((acumulador, nota) => {
      return nota.nota + acumulador;
    }, 0);
    const quantidadeNotas = aluno.notas.length;
    const media = soma / quantidadeNotas;
    const mediaGeral = media;
    console.log(mediaGeral);
  });
}

obterMedia();
