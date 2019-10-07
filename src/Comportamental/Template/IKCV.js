import Imposto from "./Imposto";

export default class ICCC extends Imposto {

  constructor() {
    super();
  }

  maisDeMil(valor) {
    return valor * 1.1;
  }
}
