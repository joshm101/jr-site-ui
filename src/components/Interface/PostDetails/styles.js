const thumbnailStyling = {
  maxWidth: '320px',
  width: '100%',
  margin: 'auto'
}

const styles = theme => ({
  imagesThumbnail: {
    ...thumbnailStyling,
    '& img': {
      ...thumbnailStyling
    }
  },

  title: {
    marginBottom: theme.spacing(6)
  },
  description: {
    marginTop: theme.spacing(6),
    color: theme.palette.text.primary,
    textAlign: 'left',
    whiteSpace: 'pre-wrap'
  }
})

export default styles
