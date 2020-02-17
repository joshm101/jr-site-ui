const styles = theme => ({
  root: {
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(8)
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(7)
    },
    maxWidth: '980px',
    width: '100%'
  }
})

export default styles
