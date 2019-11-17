import React from 'react'
import { ThemeProvider } from '@material-ui/styles'

import theme from '../../theme'

export default (Component) => {
  const withTheme = props => (
    <ThemeProvider theme={theme}>
      <Component {...props} />
    </ThemeProvider>
  )

  return withTheme
}
