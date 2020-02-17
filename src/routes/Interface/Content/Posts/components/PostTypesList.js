import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Typography from '@material-ui/core/Typography'
import LinearProgress from '@material-ui/core/LinearProgress'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'

import styles from './styles'

const useStyles = makeStyles(styles)

function PostTypesList({
  postTypes = [],
  retrievingPostTypes,
  onEditClick
}) {
  const classes = useStyles()

  const editActionClick = postType => {
    if (onEditClick) {
      onEditClick(postType)
    }
  }

  return (
    <div className={classes.root}>
      {postTypes.length > 0 && !retrievingPostTypes &&
        <List className={classes.list}>
          {postTypes.map(postType =>
            <ListItem key={postType._id}>
              <ListItemText primary={postType.name} />
              <ListItemSecondaryAction>
                <IconButton
                  onClick={() => editActionClick(postType)}
                  aria-label="edit"
                >
                  <EditIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          )}
        </List>
      }
      {postTypes.length === 0 && !retrievingPostTypes &&
        <div className={classes.noPostTypesNotice}>
          <Typography
            variant="body1"
            gutterBottom
          >
            No post types found
          </Typography>
        </div>
      }
      {retrievingPostTypes &&
        <LinearProgress
          color="secondary"
          className={classes.loadingBar}
        />
      }
    </div>
  )
}

export default PostTypesList
