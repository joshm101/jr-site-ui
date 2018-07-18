import moxios from 'moxios'
import axios from 'axios'

import * as tokenValidService from './index'
import * as tokenValidityMocks from './index.mock'

describe('token valid service', () => {
  beforeAll(() => {
    moxios.install(axios)
  })

  test('it resolves to true when the token is valid', () => {
    expect.assertions(1)
    tokenValidityMocks.tokenValidMock()

    return tokenValidService.tokenValid().then(result =>
      expect(result).toBe(true)
    )
  })

  test('it resolves to false when the token is invalid', () => {
    expect.assertions(1)
    tokenValidityMocks.tokenInvalidMock()

    return tokenValidService.tokenValid().then(result =>
      expect(result).toBe(false)
    )
  })

  afterAll(() => {
    moxios.uninstall()
  })
})
