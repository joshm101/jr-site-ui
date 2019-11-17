import React, { useEffect } from 'react'
import { Button } from '@material-ui/core'
import Add from '@material-ui/icons/Add'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import ContentHeader from '../ContentHeader'
import ContentContainer from '../ContentContainer'
import ImagesDisplay
  from '../../../../components/Interface/ImagesDisplay'
import { useImagesActions } from '../../../../hooks'

import './index.css'

function Images() {
  const { getImagesRoutine } = useImagesActions()

  useEffect(() => {
    getImagesRoutine()
  }, [])

  return (
    <div className="interface-images-container">
      <ContentHeader
        title="Site Images"
        action={
          <div className="initiate-file-upload-controls">
            <Link
              to="/interface/images/upload"
            >
              <Button
                variant="text"
                color="secondary"
              >
                <Add />&nbsp;
                Upload Images
              </Button>
            </Link>
          </div>
        }
      />
      <ContentContainer>
        <ImagesDisplay />
      </ContentContainer>
    </div>
  )
}

Images.propTypes = { getImagesRoutine: PropTypes.func }
Images.defaultProps = { getImagesRoutine: () => { } }

export default Images
