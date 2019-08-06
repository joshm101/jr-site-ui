const styles = theme => ({
  root: {
    marginBottom: theme.spacing(8),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    [theme.breakpoints.down('xs')]: {
      display: 'block'
    }
  },
  action: {
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(4),
      display: 'flex',
      justifyContent: 'flex-start'
    }
  }
})

export default styles
