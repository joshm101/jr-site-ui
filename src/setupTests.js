const localStorageMock = {
  getItem: jest.fn().mockReturnValue('some-token'),
  setItem: jest.fn(),
  clear: jest.fn()
}
global.localStorage = localStorageMock
