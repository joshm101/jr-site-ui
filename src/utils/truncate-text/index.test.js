import truncateText from '.'

describe('truncateText', () => {
  it('can truncate text', () => {
    const text = 'foobarbaz'
    const maxLength = 3

    const expected = 'foo...'
    const actual = truncateText(maxLength)(text)

    expect(actual).toEqual(expected)
  })

  it('uses source string if result length === maxLength', () => {
    const text = 'foobar'
    const maxLength = 3

    const expected = text
    const actual = truncateText(maxLength)(text)

    expect(actual).toEqual(expected)
  })

  it('uses source string if result length > maxLength', () => {
    const text = 'foobar'
    const maxLength = 5

    const expected = text
    const actual = truncateText(maxLength)(text)

    expect(actual).toEqual(expected)
  })

  it('does not throw if string is undefined', () => {
    const maxLength = 5

    const expected = undefined
    const actual = truncateText(maxLength)()

    expect(actual).toEqual(expected)
  })

  it('does not throw if maxLength arg is undefined', () => {
    const text = 'foo'

    const expected = text
    const actual = truncateText()(text)

    expect(actual).toEqual(expected)
  })
})
