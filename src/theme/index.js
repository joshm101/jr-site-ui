import { createMuiTheme } from '@material-ui/core/styles'

const palette = {
  primary: {
    main: '#263238',
    light: '#4f5b62',
    dark: '#000a12',
    contrastText: '#fff'
  },
  secondary: {
    main: '#ffe082',
    light: '#ffffb3',
    dark: '#caae53',
    contrastText: '#000000'
  },
  background: {
    main: '#f2f2f2',
    light: '#fafafa'
  },
  error: {
    main: '#e57373',
    light: '#ffa4a2',
    dark: '#af4448',
    contrastText: '#fff'
  }
}

const theme = createMuiTheme({
  palette
})

export default theme
