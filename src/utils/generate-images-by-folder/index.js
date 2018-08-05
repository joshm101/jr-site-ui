/**
   * Takes an array of image objects and organizes
   * them by their respective folders.
   * @param {object[]} - Array of image objects
   * @return {object} - Image objects by folder
   */
const generateImagesByFolder = (images) => {
  return images.reduce((accumulator, imageObject) => {
    const relativePathSplit = imageObject.relativePath.split('/')
    const folderIndex = relativePathSplit.length - 2

    const folder = relativePathSplit[folderIndex]
    const entry = accumulator[folder]
    if (entry) {
      // folder already exists in accumulator,
      // add current image to folder entry
      entry.images = entry.images.concat(imageObject.url)
      return accumulator
    }

    // folder entry does not exist in accumulator,
    // set entry and add image as first element
    // of images array
    accumulator[folder] = {
      name: folder,
      images: [imageObject.url]
    }

    return accumulator
  }, {})
}

export default generateImagesByFolder
