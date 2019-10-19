import OrdemDePagamentoStatus from "./OrdemDePagamentoStatus";
import Entregue from "./Entregue";

export default class Expedido extends OrdemDePagamentoStatus{
  
  constructor() {
    super('expedido', Entregue);
  }
  
}
