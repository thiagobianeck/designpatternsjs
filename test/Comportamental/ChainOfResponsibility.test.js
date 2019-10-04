const CumulativeSum = require('../../src/Comportamental/ChainOfResponsibility/CumulativeSum');

describe('Design Pattern Chain of Responsibility', function() {
  it('Deve estar somando valor inicial zero', function() {
    const sum = new CumulativeSum();
    expect(sum.add(10).add(2).add(50).sum).toEqual(62);
  });

  it('Deve estar somando o valor inicial', function() {
    const initialValue = 10;
    const sum = new CumulativeSum(initialValue);
    expect(sum.add(10).add(20).add(5).sum).toEqual(45);
  });
});
