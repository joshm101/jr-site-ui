const styles = theme => ({
  root: {
    color: theme.palette.text.primary
  },
  menuRoot: {
    backgroundColor: theme.palette.primary.light
  },
  itemRoot: {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.primary.light,
    // && done to increase specificity vs default pseudo class rules
    '&&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.text.primary
    }
  },
  itemSelected: {
    // && done to increase specificity vs default pseudo class rules
    '&&': {
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.text.secondary
    },
    '&&&:hover': {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.text.secondary
    }
  }
})

export default styles
