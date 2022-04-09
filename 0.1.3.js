//enunciado 1//

const anos = ['2012', '2010', '2020', '2022', '2035', '2045'];
function considerarAnosMenores(anoTeste) {
  var anosMenores = [];
  for (let i = 0; i < anos.length; i++) {
    if (anos[i] < anoTeste) {
      anosMenores[i] = anos[i];
    }
  }
  return console.log(anosMenores);
}
//considerarAnosMenores(2050);

//enunciado2//

function considerarAnosMaiores(anoTeste) {
  var contador = 0;
  for (let i = 0; i < anos.length; i++) {
    if (anos[i] >= anoTeste) {
      contador++;
    }
  }
  return console.log(contador);
}
considerarAnosMaiores(2020);

