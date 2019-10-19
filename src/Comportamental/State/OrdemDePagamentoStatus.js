export default class OrdemDePagamentoStatus {
  
  constructor(nome, proximoStatus) {
    this.nome = nome;
    this.proximoStatus = proximoStatus;
  }
  
  proximo() {
    return new this.proximoStatus();
  }

}
