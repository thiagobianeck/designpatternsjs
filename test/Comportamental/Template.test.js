import ICCC from "../../src/Comportamental/Template/IKCV";
import IKCV from "../../src/Comportamental/Template/ICCC";

describe('Design Pattern Template Tests', () => {

  test('Deve retornar os valores corretos', () => {
    const iccc = new ICCC();
    const ikcv = new IKCV();

    expect(iccc.calcula(1000)).toBe(1110);
    expect(ikcv.calcula(1000)).toBe(1210);
    expect(ikcv.calcula(100)).toBe(110);

  });

});
