const styles = theme => ({
  root: {
    position: 'relative'
  },
  checkbox: {
    '& svg': {
      color: theme.palette.secondary.main,
      fontSize: '2rem'
    }
  },
  overlay: {
    '&:hover': {
      cursor: 'pointer'
    }
  }
})

export default styles
