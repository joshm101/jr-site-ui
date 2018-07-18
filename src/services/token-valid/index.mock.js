import moxios from 'moxios'

const tokenValidMock = () => (
  moxios.wait(() => {
    const request = moxios.requests.mostRecent()
    request.respondWith({
      status: 200,
      response: {
        data: true
      }
    })
  })
)

const tokenInvalidMock = () => (
  moxios.wait(() => {
    const request = moxios.requests.mostRecent()
    request.respondWith({
      status: 200,
      response: {
        data: false
      }
    })
  })
)

export {
  tokenValidMock,
  tokenInvalidMock
}
