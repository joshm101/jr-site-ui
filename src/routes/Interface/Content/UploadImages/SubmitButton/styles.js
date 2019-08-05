const styles = theme => ({
  fab: {
    position: 'absolute',
    [theme.breakpoints.up('sm')]: {
      bottom: theme.spacing(4),
      right: theme.spacing(4)
    },
    [theme.breakpoints.down('xs')]: {
      bottom: theme.spacing(8),
      right: theme.spacing(1)
    }
  },
  fabDisabled: {
    '&&': {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.text.primary
    },
    '& svg': {
      color: theme.palette.text.primary
    }
  }
})

export default styles
