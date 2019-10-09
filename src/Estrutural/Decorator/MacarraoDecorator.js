import Macarrao from "./Macarrao";

export default class MacarraoDecorator extends Macarrao{

  constructor(macarrao) {
    super();
    this.macarrao = macarrao;
  }

  getPrice() {
    return this.macarrao.getPrice();
  }

}
