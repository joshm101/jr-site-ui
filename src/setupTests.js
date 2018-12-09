import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

const localStorageMock = {
  getItem: jest.fn().mockReturnValue('some-token'),
  setItem: jest.fn(),
  clear: jest.fn()
}
global.localStorage = localStorageMock
