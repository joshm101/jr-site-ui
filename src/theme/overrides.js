import { DEFAULT_PALETTE } from './palettes'

const overrides = {
  MuiSnackbar: {
    root: {
      maxWidth: '515px',
      width: '100%'
    }
  },
  MuiMobileStepper: {
    root: {
      background: DEFAULT_PALETTE.background.main
    }
  },
  MuiAvatar: {
    root: {
      borderRadius: '10%'
    }
  },
  MuiTypography: {
    body2: {
      color: DEFAULT_PALETTE.grey[500]
    }
  },
  MuiCard: {
    root: {
      backgroundColor: DEFAULT_PALETTE.background.light
    }
  }
}

export { overrides }
