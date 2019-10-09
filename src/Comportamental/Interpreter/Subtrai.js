export default class Subtrai {
  constructor(esquerda, direita) {
    this.esquerda = esquerda;
    this.direita = direita;
  }

  interpret() {
    return this.esquerda.interpret() - this.direita.interpret();
  }
}
