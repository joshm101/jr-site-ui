import React from 'react'
import { Route } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

import ImagesHome from './Home'
import UploadImages from '../UploadImages'

import styles from './styles'

const useStyles = makeStyles(styles)

function Images({ match }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.contentRoot}>
        <Route exact path={`${match.url}`} component={ImagesHome} />
        <Route exact path={`${match.url}/upload`} component={UploadImages} />
      </div>
    </div>
  )
}

Images.propTypes = { getImagesRoutine: PropTypes.func }
Images.defaultProps = { getImagesRoutine: () => { } }

export default Images
