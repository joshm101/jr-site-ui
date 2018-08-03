import React, { Component } from 'react'

import InterfaceImagesDisplay
  from '../../../../components/InterfaceImagesDisplay'
import withImagesActions from '../../../../hoc/withImagesActions'

class Images extends Component {
  componentDidMount() {
    this.props.getImagesRoutine()
  }

  render() {
    return (
      <div>
        <InterfaceImagesDisplay />
      </div>
    )
  }
}

export default withImagesActions(Images)
