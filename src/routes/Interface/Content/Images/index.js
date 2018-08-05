import React, { Component } from 'react'
import { Button, Typography } from '@material-ui/core'
import Add from '@material-ui/icons/Add'
import { Link } from 'react-router-dom'

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
          variant="display2"
          className="interface-route-header"
        >
          Site Images
        </Typography>
        <div className="initiate-file-upload-controls">
          <Link
            to="/interface/images/upload"
          >
            <Button
              variant="raised"
              color="primary"
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

export default withImagesActions(Images)
