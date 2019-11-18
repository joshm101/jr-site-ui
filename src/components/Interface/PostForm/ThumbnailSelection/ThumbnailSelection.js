import React from 'react'

import ImageSelector from '../../ImageSelector'

function ThumbnailSelection(props) {
  const { fieldInitializers } = props
  const { raw } = fieldInitializers

  return (
    <ImageSelector {...raw('thumbnailImage')} />
  )
}

export default ThumbnailSelection
