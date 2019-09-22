import Cockpit from '../../../src/Comportamental/CommandPattern/CockPit';
import Turbine from '../../../src/Comportamental/CommandPattern/Turbine';
import OnCommand from '../../../src/Comportamental/CommandPattern/OnCommand';
import OffCommand from '../../../src/Comportamental/CommandPattern/OffCommand';
import SpeedUpCommand from "../../../src/Comportamental/CommandPattern/SpeedUpCommand";
import SpeedDownCommand from "../../../src/Comportamental/CommandPattern/SpeedDownCommand";

let turbina = null;
let cockpit = null;

describe('Teste do Design Pattern Comportamental Command', () => {

  describe('Ao ligar a turbina...', function () {


    beforeAll(() => {
      turbina = new Turbine();
      const onCommand = new OnCommand(turbina);
      cockpit = new Cockpit(onCommand);
      cockpit.execute();
    });

    test('Deve estar ligada', () => {
      expect(turbina.state).toBeTruthy();
    });

    test('A velocidade deve ser 100', () => {
      expect(turbina.speed).toBe(100);
    });

    test('Ao aumentar a velocidade deve ser 200', () => {
      const speedUpCommand = new SpeedUpCommand(turbina);
      cockpit = new Cockpit(speedUpCommand);
      cockpit.execute();
      expect(turbina.speed).toBe(200);
    });

    test('Ao diminuir a velocidade deve ser 100', () => {
      const speedDownCommand = new SpeedDownCommand(turbina);
      cockpit = new Cockpit(speedDownCommand);
      cockpit.execute();
      expect(turbina.speed).toBe(100);
    });

    test('Deve desligar', () => {
      const offCommand = new OffCommand(turbina);
      cockpit = new Cockpit(offCommand);
      cockpit.execute();
      expect(turbina.state).toBeFalsy();
    });

    test('Após Desligar deve estar desligada', () => {
      expect(turbina.state).toBeFalsy();
    });

    test('Após desligada velocidade deve ser 0', () => {
      expect(turbina.speed).toBe(0);
    });
  });
});
