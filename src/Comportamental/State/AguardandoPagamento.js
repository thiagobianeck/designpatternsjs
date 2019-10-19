import OrdemDePagamentoStatus from "./OrdemDePagamentoStatus";
import Expedido from "./Expedido";

export default class AguardandoPagamento extends OrdemDePagamentoStatus{
  
  constructor() {
    super('aguardandoPagamento', Expedido);
  }
  
}
