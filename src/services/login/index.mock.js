import moxios from 'moxios'

const loginSuccessMock = () => (
  moxios.wait(() => {
    const request = moxios.requests.mostRecent()
    request.respondWith({
      status: 200,
      response: {
        data: 'a-valid-jwt',
        message: 'Login successful!'
      }
    })
  })
)

const loginFailureMock = () => (
  moxios.wait(() => {
    const request = moxios.requests.mostRecent()
    request.respondWith({
      status: 401,
      response: {
        message: 'Invalid username and/or password.'
      }
    })
  })
)

export {
  loginSuccessMock,
  loginFailureMock
}
