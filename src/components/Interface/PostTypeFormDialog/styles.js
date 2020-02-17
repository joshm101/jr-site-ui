const styles = theme => ({
  successNoticeContent: {
    backgroundColor: '#338a3e'
  },
  failureNoticeContent: {
    backgroundColor: theme.palette.error.main
  },
  loading: {
    // !important to override inline styles
    height: `${theme.spacing(2.5)}px!important`,
    width: `${theme.spacing(2.5)}px!important`
  }
})

export default styles
