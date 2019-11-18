const styles = theme => ({
  root: {
    '& .MuiTextField-root': {
      display: 'block',
      width: '100%'
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: theme.spacing(80)
    },
    maxWidth: theme.spacing(76),
    margin: 'auto'
  },
  initInfo: {
    marginBottom: theme.spacing(5),
    '& .MuiFormControl-root': {
      display: 'block'
    },
    '& .featured-post-switch-container': {
      marginLeft: '0',
      marginTop: `${theme.spacing(1)}px`
    },
    '& .title-helper-text': {
      color: theme.palette.error.main
    }
  },
  stepContent: {
    margin: `${theme.spacing(4)}px 0`,
    maxHeight: '400px',
    height: '400px',
    position: 'relative',
    '& > div': {
      margin: '0',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '100%'
    }
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  backButton: {
    '&.MuiButton-root': {
      '&.Mui-disabled': {
        color: theme.palette.text.disabled
      },
      color: theme.palette.text.primary
    }
  },
  nextButton: {
    justifySelf: 'flex-end'
  },
  basicInfo: {
    // maxWidth: theme.spacing(70),
    margin: 'auto'
  },
  imageSelection: {
    maxWidth: theme.spacing(105),
    margin: 'auto'
  },
  formErrors: {
    [theme.breakpoints.down('sm')]: {
      padding: '15px 0'
    },
    padding: '25px 0'
  },
  formError: {
    display: 'block',
    color: theme.palette.secondary.main,
    textAlign: 'right'
  }
})

export default styles
