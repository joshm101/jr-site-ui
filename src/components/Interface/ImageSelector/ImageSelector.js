import React, { useEffect } from 'react'
import withImages from '../../../hoc/withImages'
import withImagesActions from '../../../hoc/withImagesActions'
import ImageGrid from '../ImageGrid'

function ImageSelector(props) {
  const { getImagesRoutine, images } = props

  useEffect(() => (
    getImagesRoutine()
  ), [])

  const imageUrls = images.data.map(image => image.url)

  return (
    <ImageGrid images={imageUrls} />
  )
}

export default withImages(
  withImagesActions(ImageSelector)
)
