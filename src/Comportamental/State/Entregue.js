import OrdemDePagamentoStatus from "./OrdemDePagamentoStatus";

export default class Entregue extends OrdemDePagamentoStatus{
  
  constructor() {
    super('entregue', Entregue);
  }
  
}
