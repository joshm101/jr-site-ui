import React, { Component } from 'react'
import classNames from 'classnames'
import {
  Drawer,
  IconButton,
  Divider,
  Toolbar,
  Typography,
  AppBar,
  Hidden,
  withStyles
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

import Content from './Content'

import styles from './styles'

class Interface extends Component {
  state = {
    drawerOpen: true,
    anchor: 'left',
    title: 'Interface'
  }

  handleDrawerOpen = () => {
    this.setState({ drawerOpen: true })
  }

  handleDrawerClose = () => {
    this.setState({ drawerOpen: false })
  }

  render() {
    const { drawerOpen, anchor, title } = this.state
    const { classes } = this.props
    const drawer = (
      <Drawer
        variant="persistent"
        anchor={anchor}
        open={drawerOpen}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={this.handleDrawerClose}>
            {<ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
      </Drawer>
    )
    return (
      <div className={classes.interfaceRoot}>
        <Hidden xsDown>
          <AppBar
            className={classNames(classes.appBar, {
              [classes.appBarShift]: drawerOpen
            })}
          >
            <Toolbar disableGutters={!drawerOpen}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, drawerOpen && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" noWrap>
                {title}
              </Typography>
            </Toolbar>
          </AppBar>
          {drawer}
          <main
            className={classNames(classes.content, {
              [classes.contentShift]: drawerOpen
            })}
          >
            <div className={classes.drawerHeader} />
            <Content />
          </main>
        </Hidden>

        <Hidden smUp>
          <AppBar
            className={classNames(classes.appBar)}
          >
            <Toolbar>
              <Typography variant="title" color="inherit" noWrap>
                {title}
              </Typography>
            </Toolbar>
          </AppBar>
          <main className={classes.mobileContent}>
            <div className={classes.drawerHeader} />
            <Content />
          </main>
        </Hidden>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Interface)
