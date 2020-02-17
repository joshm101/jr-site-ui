import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import UploadIcon from '@material-ui/icons/CloudUploadOutlined'

import ImagesDisplay
  from '../../../../components/Interface/ImagesDisplay'

function ImagesHome({ match }) {
  const dispatch = useDispatch()

  const onUploadImagesClick = useCallback(() => {
    dispatch(
      push(`${match.path}/upload`)
    )
  }, match.path)

  return (
    <div>
      <Button
        color="secondary"
        variant="outlined"
        startIcon={<UploadIcon />}
        onClick={onUploadImagesClick}
      >
        Upload Images
      </Button>
      <br />
      <br />
      <ImagesDisplay />
    </div>
  )
}

ImagesHome.propTypes = { getImagesRoutine: PropTypes.func }
ImagesHome.defaultProps = { getImagesRoutine: () => { } }

export default ImagesHome
