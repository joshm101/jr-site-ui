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
  }
}

export { overrides }
