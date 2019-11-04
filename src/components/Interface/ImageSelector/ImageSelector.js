import React from 'react'

import ImageGrid from '../ImageGrid'
import SelectableImage from '../SelectableImage'
import withImages from '../../../hoc/withImages'
import theme from '../../../theme'

import { IMAGE_SELECTION_MODES } from '../constants'

const imageGridStyles = {
  root: {
    gridTemplateColumns: 'repeat(auto-fill, minmax(175px, 200px))',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 160px))'
    },
    maxHeight: theme.spacing(50),
    gridGap: '0px',
    overflow: 'auto'
  },
  gridItem: {
    margin: '0px'
  }
}

const selectionIncludesImage = selection => imageObject => (
  selection.includes(imageObject.url)
)

const doesNotMatchImage = imageUrlToMatch => imageUrl => (
  imageUrl !== imageUrlToMatch
)

const getImageUrl = imageObject => imageObject.url

function ImageSelector(props) {
  const {
    value,
    onChange,
    multiple,
    images: imagesState
  } = props

  const { data: images } = imagesState

  const imageIsSelected = imageUrl => (
    multiple ?
      value && value.includes(imageUrl) :
      value === imageUrl
  )

  const handleMultiModeImageSelect = src => (
    images.filter(
      selectionIncludesImage([...value, src])
    ).map(getImageUrl)
  )

  const handleMultiModeImageUnselect = src => (
    value.filter(doesNotMatchImage(src))
  )

  const singleOnSelect = onChange
  const multipleOnSelect = src => {
    const isSelectingImage = !imageIsSelected(src)

    const newValue = isSelectingImage ? (
      handleMultiModeImageSelect(src)
    ) : handleMultiModeImageUnselect(src)

    onChange(newValue)
  }

  const onSelect = src => (
    multiple ?
      multipleOnSelect(src) : singleOnSelect(src)
  )

  const { CHECKBOX, RADIO } = IMAGE_SELECTION_MODES

  return (
    <ImageGrid customStyles={imageGridStyles}>
      {images.map((image, index) =>
        <SelectableImage
          key={image.url}
          src={image.url}
          onSelect={onSelect}
          isSelected={imageIsSelected(image.url)}
          mode={multiple ? CHECKBOX : RADIO}
        />
      )}
    </ImageGrid>
  )
}

export default withImages(ImageSelector)
