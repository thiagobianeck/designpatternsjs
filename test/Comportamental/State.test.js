import OrdemDePagamento from "../../src/Comportamental/State/OrdemDePagamento";

describe('Design Pattern State Tests', () => {
  
  test('sanity', () => {
    const ordemDePagamento = new OrdemDePagamento();
    expect(ordemDePagamento.state.nome).toBe('aguardandoPagamento');
    ordemDePagamento.proximoEstado();
    expect(ordemDePagamento.state.nome).toBe('expedido');
    ordemDePagamento.proximoEstado();
    expect(ordemDePagamento.state.nome).toBe('entregue');
  });

});
