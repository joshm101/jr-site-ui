/**
 * Constructs a URL query string based on query object and
 * acceptedProperties array.
 * @param {string[]} acceptedProperties - Each item is an
 * accepted query params property
 * @return {() => query: object => string) - Function that
 * takes query object as a parameter and returns final
 * query string
 */
const constructQueryString = acceptedProperties => query => {
  if (!query) {
    return ''
  }

  const queryEmpty = Object.keys(query).length === 0
  if (queryEmpty) {
    return ''
  }

  const queryParamValid = property => {
    if (!acceptedProperties) {
      // all param properties are considered to be valid
      // if acceptedProperties object value is falsy
      return true
    }

    return acceptedProperties.includes(property)
  }

  const KEY = 0
  const VALUE = 1

  const queryStringsArray = (
    Object.entries(query).map(keyValueTuple => (
      queryParamValid(keyValueTuple[KEY]) ? (
        `${keyValueTuple[KEY]}=${keyValueTuple[VALUE]}`
      ) : null
    )).filter(paramString => paramString)
  )

  const queryString = `?${queryStringsArray.join('&')}`

  return queryString
}

export default constructQueryString
