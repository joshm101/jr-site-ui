import axios from 'axios'
import moxios from 'moxios'

import * as loginService from './index'
import * as mocks from './index.mock'

describe('login service', () => {
  beforeAll(() => {
    moxios.install(axios)
  })

  test('rejects when a username is not provided', () => {
    expect.assertions(1)
    return loginService.login('', 'some_pass').catch(error =>
      expect(error.message).toMatch('No username was provided.')
    )
  })

  test('rejects when a password is not provided', () => {
    expect.assertions(1)
    return loginService.login('some_username', '').catch(error =>
      expect(error.message).toMatch('No password was provided.')
    )
  })

  test('resolves when correct credentials are provided', () => {
    expect.assertions(1)
    mocks.loginSuccessMock()

    return loginService.login(
      'valid_username', 'valid_password'
    ).then(response => {
      expect(response).toBe('a-valid-jwt')
    })
  })

  test('rejects when invalid credentials are provided', () => {
    expect.assertions(1)
    mocks.loginFailureMock()

    return loginService.login(
      'invalid_username', 'invalid_password'
    ).catch(error =>
      expect(error.message).toBe('Invalid username and/or password.')
    )
  })

  afterAll(() => {
    moxios.uninstall()
  })
})
