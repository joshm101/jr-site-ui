import React, { Component } from 'react'
import { Button, Typography } from '@material-ui/core'
import Add from '@material-ui/icons/Add'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import InterfaceImagesDisplay
  from '../../../../components/InterfaceImagesDisplay'
import withImagesActions from '../../../../hoc/withImagesActions'

import './index.css'

class Images extends Component {
  componentDidMount() {
    this.props.getImagesRoutine()
  }

  render() {
    return (
      <div className="interface-images-container">
        <Typography
          variant="h3"
          className="interface-route-header"
        >
          Site Images
        </Typography>
        <div className="initiate-file-upload-controls">
          <Link
            to="/interface/images/upload"
          >
            <Button
              variant="contained"
              color="secondary"
            >
              <Add />&nbsp;&nbsp;
              Upload Images
            </Button>
          </Link>
        </div>
        <div>
          <InterfaceImagesDisplay />
        </div>
      </div>
    )
  }
}

Images.propTypes = { getImagesRoutine: PropTypes.func }
Images.defaultProps = { getImagesRoutine: () => { } }

export const ImagesNoWrap = Images
export default withImagesActions(Images)
