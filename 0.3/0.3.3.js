const medicos = [
  {
    nome: 'Leticia',
    sobrenome: 'Costa',
    genero: 'feminino',
  },
  {
    nome: 'Adimaldo',
    sobrenome: 'Pinto',
    genero: 'masculino',
  },
  {
    nome: 'Noah',
    sobrenome: 'Lutus',
    genero: 'nao-binario',
  },
];

const validarGenero = (medico, value, index) => {
  if (medico.genero == 'feminino') {
    return 'Dr(a)' + ' ' + medico.nome + ' ' + medico.sobrenome;
  } else if (medico.genero == 'masculino') {
    return 'Dr' + ' ' + medico.nome + ' ' + medico.sobrenome;
  } else {
    return 'Dr(e)' + ' ' + medico.nome + ' ' + medico.sobrenome;
  }
};

const result = medicos.map(validarGenero);
console.log(result);
