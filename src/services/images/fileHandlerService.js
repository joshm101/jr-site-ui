let instance = null

/**
 * Factory function closure with private
 * filesToUpload value that can be
 * manipulated via returned object's
 * property functions. Cannot store File
 * objects in Redux state, so this is
 * used instead. Maintains a references to
 * an instance variable to ensure singleton
 * behavior
 */
const fileHandlerService = () => {
  let filesToUpload = []
  if (!instance) {
    // instance not yet created, create
    // service object instance
    instance = Object.create({
      setFiles: (files) => {
        filesToUpload = [...files]
      },
      getFiles: () => {
        return filesToUpload
      },
      removeFile: (index) => {
        filesToUpload = [
          ...filesToUpload.slice(0, index),
          ...filesToUpload.slice(index + 1)
        ]
      },
      removeAllFiles: () => {
        filesToUpload = []
      }
    })
  }
  // Always return single instance
  return instance
}

export default fileHandlerService
