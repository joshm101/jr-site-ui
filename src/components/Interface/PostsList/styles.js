const styles = theme => ({
  listItem: {
    '&:hover': {
      cursor: 'pointer'
    }
  },
  noPostsNoticeLabel: {
    marginBottom: theme.spacing(10)
  },
  root: {
    width: '100%',
    height: '100%',
    minHeight: '250px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  list: {
    width: '100%'
  },
  loadingBar: {
    width: '100%'
  }
})

export default styles
