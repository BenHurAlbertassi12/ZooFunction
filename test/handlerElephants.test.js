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
  it('A função handlerElephants é um String', () => {
    expect(typeof handlerElephants([])).toEqual('string');
  });
  it('O contador handlerElephants é um Number', () => {
    expect(typeof handlerElephants('count')).toEqual('number');
  });
  it('A names é um String', () => {
    expect(typeof handlerElephants('names')).toEqual('object');
  });
  it('O averageAge é um Number', () => {
    expect(typeof handlerElephants('averageAge')).toEqual('number');
  });
  it('Location é um String', () => {
    expect(typeof handlerElephants('location')).toEqual('string');
  });
  it('O popularity é um Number', () => {
    expect(typeof handlerElephants('popularity')).toEqual('number');
  });
  it('O availability é um Number', () => {
    expect(typeof handlerElephants('availability')).toEqual('object');
  });
  // it('O availability é um handlerElephants', () => {
  //   expect(handlerElephants()).toBe('object');
  // });
});
