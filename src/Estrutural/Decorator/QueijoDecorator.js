import MacarraoDecorator from "./MacarraoDecorator";

export default class QueijoDecorator extends MacarraoDecorator{

  constructor(macarrao) {
    super(macarrao);
  }

  getPrice() {
    return super.getPrice() + 3;
  }

}
