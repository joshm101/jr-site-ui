import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import PostsList from '../../../../components/Interface/PostsList'
import styles from './styles'

const useStyles = makeStyles(styles)

function Dashboard() {
  const classes = useStyles()

  return (
    <>
      <h1>Dashboard</h1>
      <Grid container>
        <Grid
          container
          item
          xs={12}
          md={6}
          alignItems="center"
        >
          <Card
            elevation={0}
            className={classes.postsListCard}
          >
            <CardContent className={classes.postListCardContent}>
              <Grid
                container
                className={classes.postsListsCardContentGrid}
              >
                <Grid item xs={12}>
                  <Typography variant="h5" gutterBottom>
                    Posts
                  </Typography>
                </Grid>
                <Grid container item xs={12} alignItems="center">
                  <PostsList />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default Dashboard
