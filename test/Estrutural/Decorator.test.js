import Penne from "../../src/Estrutural/Decorator/Penne";
import MolhoDecorator from "../../src/Estrutural/Decorator/MolhoDecorator";
import QueijoDecorator from "../../src/Estrutural/Decorator/QueijoDecorator";

describe('Design Pattern Decorator', () => {

  test('Deve calcular corretamente', () => {
    const penne = new Penne();
    const penneComMolho = new MolhoDecorator(penne);
    const penneComMolhoEQueijo= new QueijoDecorator(penneComMolho);

    expect(penne.getPrice()).toBe(8);
    expect(penneComMolho.getPrice()).toBe(13);
    expect(penneComMolhoEQueijo.getPrice()).toBe(16);
  });

});
