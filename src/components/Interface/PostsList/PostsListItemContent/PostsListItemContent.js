import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'

import truncateText from '../../../../utils/truncate-text'

import styles from '../styles'

const useStyles = makeStyles(styles)

function PostsListItemContent({ post }) {
  const classes = useStyles()
  const theme = useTheme()
  const notMobileDevice = useMediaQuery(
    theme.breakpoints.up('sm')
  )
  const truncateDescription = notMobileDevice ? (
    truncateText(84)
  ) : truncateText(42)
  const truncateTitle = truncateText(15)

  return (
    <div className={classes.listItemContent}>
      <Avatar
        src={post.thumbnailImage}
        className={classes.listItemAvatar}
      />
      <div>
        <Typography variant="body1">
          {truncateTitle(post.title)}
        </Typography>
        <Typography variant="body2">
          {truncateDescription(post.description)}
        </Typography>
      </div>
    </div>
  )
}

export default PostsListItemContent
