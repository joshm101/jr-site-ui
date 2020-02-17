import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Route } from 'react-router-dom'

import PostsHome from './Home'
import CreatePost from '../CreatePost'
import ViewPost from '../ViewPost'
import EditPost from '../EditPost'

import styles from './styles'

const useStyles = makeStyles(styles)

function Posts({ match }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.contentRoot}>
        <Route exact path={`${match.url}`} component={PostsHome} />
        <Route exact path={`${match.url}/view/:id`} component={ViewPost} />
        <Route exact path={`${match.url}/edit/:id`} component={EditPost} />
        <Route exact path={`${match.url}/create`} component={CreatePost} />
      </div>
    </div>
  )
}

export default Posts
