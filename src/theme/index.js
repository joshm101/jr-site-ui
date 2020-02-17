import { createMuiTheme } from '@material-ui/core/styles'

import { DEFAULT_PALETTE } from './palettes'
import { overrides } from './overrides'

const palette = DEFAULT_PALETTE

const theme = createMuiTheme({
  palette,
  overrides,
  props: {
    MuiTextField: {
      color: 'secondary',
      autoComplete: 'off'
    },
    MuiFormHelperText: {
      color: '#fff'
    }
  }
})

export default theme
