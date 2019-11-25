import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Select,
  MenuItem
} from '@material-ui/core'
import styles from './styles'

const useStyles = makeStyles(styles)

function StyledSelect(props) {
  const { children, ..._props } = props

  const classes = useStyles()

  const MenuProps = {
    MenuListProps: {
      classes: {
        root: classes.menuRoot
      },
      dense: true
    }
  }

  return (
    <Select
      {..._props}
      className={classes.root}
      MenuProps={MenuProps}
    >
      {
        React.Children.map(children, child =>
          React.cloneElement(
            child,
            {
              classes: {
                root: classes.itemRoot,
                selected: classes.itemSelected,
                focusVisible: classes.itemFocusVisible
              }
            }
          )
        )
      }
    </Select>
  )
}

// eslint-disable-next-line
StyledSelect.Item = props => <MenuItem {...props} />

export default StyledSelect
