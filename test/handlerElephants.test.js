const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Quantos elefantes tem na parada?', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Qual é a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('Qual é o nome dos elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Quando é possivel visitar os elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('Qual é a media de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('Onde os elefantes estão localizados', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });
  it('A função recebe um Array', () => {
    expect(typeof handlerElephants([])).toEqual('string');
  });
});
