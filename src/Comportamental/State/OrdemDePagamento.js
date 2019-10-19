import AguardandoPagamento from "./AguardandoPagamento";

export default class OrdemDePagamento {
  
  constructor() {
    this.state = new AguardandoPagamento();
  }
  
  proximoEstado() {
    this.state = this.state.proximo();
  }
}
