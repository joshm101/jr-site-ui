import React, { Component } from 'react'
import { Button } from '@material-ui/core'
import Add from '@material-ui/icons/Add'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import ContentHeader from '../ContentHeader'
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
