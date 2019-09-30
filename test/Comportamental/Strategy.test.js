import Commute from "../../src/Comportamental/Strategy/Commute";
import Taxi from "../../src/Comportamental/Strategy/Taxi";
import Bus from "../../src/Comportamental/Strategy/Bus";
import PersonalCar from "../../src/Comportamental/Strategy/PersonalCar";

const commute = new Commute();

describe('Testes Design Pattern Strategy', () => {

  it('Deve funcionar para o Taxi', () => {
    expect(commute.travel(new Taxi())).toEqual(5);
  });

  it('Deve funcionar para o Ônibus', () => {
    expect(commute.travel(new Bus())).toEqual(10);
  });

  it('Deve funcionar para o Carro', () => {
    expect(commute.travel(new PersonalCar())).toEqual(3);
  });

});
