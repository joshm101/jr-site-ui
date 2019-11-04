import { createMuiTheme } from '@material-ui/core/styles'

const palette = {
  primary: {
    main: '#2f3235',
    light: '#585b5f',
    dark: '#050a0f',
    contrastText: '#fff'
  },
  secondary: {
    main: '#ffe082',
    light: '#ffffb3',
    dark: '#caae53',
    contrastText: '#000000'
  },
  background: {
    main: '#1f2023',
    light: '#4f5b62'
  },
  error: {
    main: '#e57373',
    light: '#ffa4a2',
    dark: '#af4448',
    contrastText: '#fff'
  },
  info: {
    main: '#000',
    light: '#000',
    dark: '#000',
    contrastText: '#fff'
  },
  text: {
    primary: '#fff',
    secondary: '#000',
    disabled: 'rgba(255, 255, 255, 0.27)'
  }
}

const overrides = {
  MuiFab: {
    root: {
      '&&$disabled': {
        '& svg': {
          color: palette.text.primary
        },
        backgroundColor: palette.primary.dark,
        color: palette.text.primary
      }
    }
  },
  MuiButton: {
    contained: {
      '&$root': {
        '&$disabled': {
          '& svg': {
            color: palette.text.primary
          },
          backgroundColor: palette.primary.dark,
          color: palette.text.primary
        }
      }
    }
  },
  MuiTextField: {
    root: {
      '& label': {
        color: palette.secondary.main,
        '&.Mui-focused': {
          color: palette.secondary.main
        }
      }
    }
  },
  MuiOutlinedInput: {
    root: {
      '& fieldset': {
        borderColor: palette.secondary.main
      },
      '&:hover': {
        '& fieldset': {
          borderColor: `${palette.secondary.light} !important`
        }
      },
      '&.Mui-focused': {
        '& fieldset': {
          borderColor: `${palette.secondary.main} !important`
        }
      },
      '&.Mui-focused:hover': {
        '& fieldset': {
          borderColor: `${palette.secondary.main} !important`
        }
      },
      '& input': {
        color: palette.text.primary
      }
    }
  },
  MuiTypography: {
    root: {
      color: palette.text.primary
    }
  },
  MuiMobileStepper: {
    root: {
      backgroundColor: 'transparent'
    },
    dotActive: {
      backgroundColor: palette.text.primary
    }
  },
  MuiPaper: {
    root: {
      backgroundColor: palette.primary.main
    }
  },
  MuiDialogTitle: {
    root: {
      backgroundColor: palette.primary.main
    }
  },
  MuiDialogContent: {
    root: {
      backgroundColor: palette.primary.main
    }
  },
  MuiDialogActions: {
    root: {
      backgroundColor: palette.primary.main
    }
  },
  MuiDialogContentText: {
    root: {
      color: palette.text.primary
    }
  },
  MuiBottomNavigationAction: {
    root: {
      backgroundColor: palette.primary.main,
      color: palette.secondary.light
    }
  },
  MuiSnackbar: {
    root: {
      maxWidth: '515px',
      width: '100%'
    }
  }
}

const theme = createMuiTheme({
  palette,
  overrides
})

export default theme
