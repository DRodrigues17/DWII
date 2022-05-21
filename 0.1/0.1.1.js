const boleto = 3;
const dias = 5;

function funcao (boleto, dias) {
  let juros = dias *  (boleto * 0.033);
  const boletoComJuros = boleto + juros;

  return console.log('o preco do boleto é ' + boleto +
    ', mas recebeu um juros mediante os dias de atraso, o preco se tornou ' +
      boletoComJuros
  );
}

funcao (boleto, dias);