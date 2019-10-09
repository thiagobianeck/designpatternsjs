import MacarraoDecorator from "./MacarraoDecorator";

export default class MolhoDecorator extends MacarraoDecorator{

  constructor(macarrao) {
    super(macarrao);
  }

  getPrice() {
    return super.getPrice() + 5;
  }

}
