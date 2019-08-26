const styles = theme => ({
  root: {
    position: 'relative'
  },
  selector: {
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
