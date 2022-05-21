const arquivos = [
  {
    id: 1,
    nome: 'Meu Trabalho v1',
    excluido: false,
  },
  {
    id: 2,
    nome: 'Meu Trabalho v2',
    excluido: false,
  },
  {
    id: 3,
    nome: 'Meu Trabalho v3',
    excluido: false,
  },
  {
    id: 4,
    nome: 'Meu Trabalho v4',
    excluido: true,
  },
];

function inverterValores() {
  arquivos.forEach((arquivo) => {
    arquivo.excluido = !arquivo.excluido;
  });
}

console.log(arquivos);
inverterValores();
console.log('função foi executada, e esse é o resultado');
console.log(arquivos);
