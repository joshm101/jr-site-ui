const styles = theme => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(8)
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(7)
    }
  },
  contentRoot: {
    margin: 'auto',
    maxWidth: '1200px',
    width: '100%'
  }
})

export default styles
