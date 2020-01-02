const truncateText = maxLength => string => {
  if (!string) {
    return
  }

  if (isNaN(maxLength)) {
    return string
  }

  if (string.length <= maxLength) {
    return string
  }

  const truncatedText = (
    `${string.slice(0, maxLength).trim()}...`
  )

  const truncatedTextLengthMatchesSource = (
    truncatedText.length === string.length
  )

  const truncatedTextLengthLongerThanSource = (
    truncatedText.length > string.length
  )

  if (
    truncatedTextLengthMatchesSource ||
    truncatedTextLengthLongerThanSource
  ) {
    return string
  }

  return truncatedText
}

export default truncateText
