function funcao(preco, convenio, cartaoDaLoja) {
  let printar;
  if (convenio && cartaoDaLoja) {
    printar = preco * 0.85;
  } else if (convenio || cartaoDaLoja) {
    printar = preco * 0.9;
  } else {
    printar = preco;
  }
  return console.log('o preco é ' + printar);
}

funcao(5, false, false);
