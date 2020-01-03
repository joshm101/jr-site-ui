import constructQueryString from '.'

describe('constructQueryString', () => {
  it('returns empty string when args undefined', () => {
    const expected = ''
    const actual = constructQueryString()()

    expect(actual).toBe(expected)
  })

  it('returns empty string when query object is empty', () => {
    const expected = ''
    const actual = constructQueryString()({})

    expect(actual).toBe(expected)
  })

  it('can construct a valid query string', () => {
    const expected = '?foo=bar&baz=foobar'
    const query = {
      foo: 'bar',
      baz: 'foobar'
    }

    const actual = constructQueryString()(query)

    expect(actual).toBe(expected)
  })

  it('ignores unaccepted properties', () => {
    const expected = '?foo=bar'
    const query = {
      foo: 'bar',
      baz: 'foobar',
      test: 'testing'
    }

    const acceptedProperties = ['foo']

    const actual = constructQueryString(
      acceptedProperties
    )(query)

    expect(actual).toBe(expected)
  })
})
