const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Valores Recebidos', () => {
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
  it('Testa se é lançado um erro quando number é indefinido', () => {
    expect(() => {
      getOpeningHours('isStringRepresentNumber');
    }).toThrow();
    expect(() => {
      getOpeningHours('validateAbbreviation');
    }).toThrow();
  });
  it('testa se a mensagem de erro é "number é indefinido"', () => {
    expect(() => {
      getOpeningHours('validateHour');
    }).toThrowError(new Error('The day must be valid. Example: Monday'));
  });
  // it('testa se a mensagem de erro é "number é indefinido2"', () => {
  //   expect(() => {
  //     getOpeningHours([]);
  //   }).toThrow('Cannot read properties of undefined (reading \'toUpperCase\')');
  // });
  it('teste Monday', () => {
    expect(getOpeningHours('Monday', '12:00-AM')).toEqual('The zoo is closed');
  });
  it('teste Tuesday', () => {
    expect(getOpeningHours('Tuesday', '12:00-AM')).toEqual('The zoo is closed');
  });
  it('teste Odin', () => {
    expect(getOpeningHours('Wednesday', '12:00-PM')).toEqual('The zoo is open');
  });
});
