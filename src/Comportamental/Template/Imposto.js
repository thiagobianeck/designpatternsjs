export default class Imposto {

  calcula(valor) {
    if(valor >= 1000) {
      valor = this.maisDeMil(valor);
    }

    return this.taxaComplementar(valor);
  }


  taxaComplementar(valor) {
    return valor + 10;
  }
}
