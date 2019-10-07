import Imposto from "./Imposto";

export default class IKCV extends Imposto {

  constructor() {
    super();
  }

  maisDeMil(valor) {
    return valor * 1.2;
  }
}
