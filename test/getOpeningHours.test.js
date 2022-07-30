const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Valores Recebidos (Linha 54)', () => {
    expect(getOpeningHours()).toEqual({
      Friday: { close: 8, open: 10 },
      Monday: { close: 0, open: 0 },
      Saturday: { close: 10, open: 8 },
      Sunday: { close: 8, open: 8 },
      Thursday: { close: 8, open: 10 },
      Tuesday: { close: 6, open: 8 },
      Wednesday: { close: 6, open: 8 },
    });
  });
  // it('Testa se é lançado um erro quando number é indefinido', () => {
  //   expect(() => {
  //     getOpeningHours('isStringRepresentNumber');
  //   }).toThrow();
  //   expect(() => {
  //     getOpeningHours('validateAbbreviation');
  //   }).toThrow();
  // });
  // it('testa se a mensagem de erro é "number é indefinido"', () => {
  //   expect(() => {
  //     getOpeningHours('validateHour');
  //   }).toThrowError(new Error('The day must be valid. Example: Monday'));
  // });
  it('teste Monday (Linha 59)', () => {
    expect(getOpeningHours('Monday', '12:00-AM')).toEqual('The zoo is closed');
  });
  it('teste Tuesday (Linha 63)', () => {
    expect(getOpeningHours('Tuesday', '12:00-AM')).toEqual('The zoo is closed');
  });
  it('teste Odin (Linha 63)', () => {
    expect(getOpeningHours('Wednesday', '12:00-PM')).toEqual('The zoo is open');
  });
  it('teste formato de hora totalmente errado', () => {
    expect(() => getOpeningHours('Odin', 'c3p0:r2d2-SW')).toThrowError(new Error('The day must be valid. Example: Monday'));
  });
  it('testando se a parada do AM PM ainda funfa estando errado (Linha 14)', () => {
    expect(() => getOpeningHours('Wednesday', '11:40-SW')).toThrowError(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  it('testando se a minutagem vai de 0 a 59 (Linha 28)', () => {
    expect(() => getOpeningHours('Monday', '11:61-AM')).toThrowError(new Error('The minutes must be between 0 and 59'));
  });
  it('testando se a hora tem que ser um numero(Linha 8)', () => {
    expect(() => getOpeningHours('Tuesday', 'hora')).toThrowError(new Error('The hour should represent a number'));
  });
  it('testando se a hora tem que ser um numero(Linha 26)', () => {
    expect(() => getOpeningHours('Tuesday', '13:14-PM')).toThrowError(new Error('The hour must be between 0 and 12'));
  });
});

// Dica, olhar sempre o Uncovered line, fazer o teste seguindo esse "mapa"
// prestar sempre atenção aos '' "" : ; - isso sempre da ruim e perco maior tempo batendo codigo sem conseguir resolver

// O conteudo do dia 7.3 que fala sobre o teste, coloca o toThrownError como função, aqui não funcionou.
