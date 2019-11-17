const mockImagesData = [
  {
    relativePath: 'foo/bar/baz',
    url: 'https://google.com'
  }
]

const mockImagesState = {
  retrievingImages: false,
  errors: false,
  data: mockImagesData
}

export { mockImagesData, mockImagesState }
