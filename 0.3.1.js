const filmes = [
  {
    nome: 'O Senhor do Aneis: A Sociedade do Anel',
    lancamento: 2002,
    diretores: ['Peter Jackson'],
    generos: ['Fantasia', 'Aventura'],
  },
  {
    nome: 'Harry Potter e a Pedra Filosofal',
    lancamento: 2001,
    diretores: ['Chris Columbus'],
    generos: ['Fantasia'],
  },
  {
    nome: 'Matrix',
    lancamento: 1999,
    diretores: ['Lana Wachowski', 'Lilly Wachowski'],
    generos: ['Ação', 'Ficção Cientifica'],
  },
];

const tituloLancamento = (filmes, nome, lancamento) => {
  nome = filmes.nome;
  lancamento = filmes.lancamento;
  console.log('nome', nome);
  console.log('lancamento', lancamento);
  return nome;
};

const idFilmes = (filmes, id, nome) => {
  for (var i in filmes) {
    id = 1;
    id++;
  }
  id = filmes.value;
  nome = filmes.nome;
  console.log('id', id);
  console.log('nome', nome);
  return id;
};

const result = filmes.map(idFilmes);
