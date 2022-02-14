class LocalStorageMock implements Storage {
  constructor() {
    // console.log('Mocking localStorage');
  }

  length = 1;

  clear = jest.fn();

  getItem = jest.fn();

  key = jest.fn();

  removeItem = jest.fn();

  setItem = jest.fn();
}

global.localStorage = new LocalStorageMock();

jest.mock('consts:version', () => jest.fn(), { virtual: true });
