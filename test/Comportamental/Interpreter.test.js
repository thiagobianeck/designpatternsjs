import Soma from "../../src/Comportamental/Interpreter/Soma";
import Numero from "../../src/Comportamental/Interpreter/Numero";
import Subtrai from "../../src/Comportamental/Interpreter/Subtrai";

describe('Design Pattern Interpreter', () => {

  test('sanity', () => {
    const result = new Soma(new Numero(100), new Subtrai(new Numero(100), new Numero(50)));
    expect(result.interpret()).toBe(150);
  });
});
