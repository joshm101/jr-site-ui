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
      background: DEFAULT_PALETTE.background.light
    },
    dotActive: {
      backgroundColor: DEFAULT_PALETTE.secondary.main
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
  },
  MuiCardHeader: {
    root: {
      padding: '8px 16px'
    }
  },
  MuiFab: {
    secondary: {
      color: '#000'
    }
  },
  MuiMenuItem: {
    hover: {
      color: '#000'
    }
  },
  MuiButton: {
    textPrimary: {
      color: '#fff'
    },
    containedSecondary: {
      color: '#000'
    }
  }
}

export { overrides }
