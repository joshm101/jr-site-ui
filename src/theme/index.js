import { createMuiTheme } from '@material-ui/core/styles'

const palette = {
  primary: {
    main: '#16161d',
    light: '#575773',
    dark: '#040406',
    contrastText: '#fff'
  },
  secondary: {
    main: '#74848E',
    light: '#A9BFCC',
    dark: '#3C5769',
    contrastText: '#fff'
  },
  background: {
    main: '#f2f2f2',
    light: '#fafafa'
  },
  error: {
    main: '#7e2c2c',
    light: '#D17D7D',
    dark: '#6E0D00',
    contrastText: '#fff'
  }
}

const theme = createMuiTheme({
  palette
})

export default theme
