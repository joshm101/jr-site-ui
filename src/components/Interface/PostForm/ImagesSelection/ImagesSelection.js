import React from 'react'

import ImageSelector from '../../ImageSelector'

function ImagesSelection(props) {
  const { fieldInitializers } = props
  const { raw } = fieldInitializers

  return (
    <ImageSelector multiple {...raw('images')} />
  )
}

export default ImagesSelection
