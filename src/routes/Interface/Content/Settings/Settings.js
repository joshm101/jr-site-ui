import React from 'react'
import { Route } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

import SiteSettings from './SiteSettings'
import AccountSettings from './AccountSettings'

import { ROUTES } from '../../../routes.constants'

import styles from './styles'

const { SETTINGS } = ROUTES.INTERFACE_ROUTES

const useStyles = makeStyles(styles)

function Settings({ match }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.contentRoot}>
        <Route
          exact
          path={`${match.url}/site`}
          component={SiteSettings}
        />
        <Route
          exact
          path={`${match.url}/account`}
          component={AccountSettings}
        />
      </div>
    </div>
  )
}

export default Settings
