const styles = theme => ({
  listItem: {
    '&:hover': {
      cursor: 'pointer'
    },
    display: 'flex',
    justifyContent: 'space-between'
  },
  listItemContent: {
    display: 'flex'
  },
  listItemActions: {
    minWidth: '96px'
  },
  listItemAvatar: {
    height: theme.spacing(6),
    width: theme.spacing(6),
    [theme.breakpoints.up('sm')]: {
      height: theme.spacing(8),
      width: theme.spacing(8)
    },
    marginRight: theme.spacing(3)
  },
  noPostsNoticeLabel: {
    marginBottom: theme.spacing(10)
  },
  root: {
    width: '100%',
    height: '100%',
    minHeight: '250px',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  list: {
    width: '100%'
  },
  loadingBar: {
    width: '100%',
    alignSelf: 'center'
  }
})

export default styles
