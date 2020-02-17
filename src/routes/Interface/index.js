import React from 'react'
import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import classnames from 'classnames'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import PhotoIcon from '@material-ui/icons/PhotoSharp'
import SettingsIcon from '@material-ui/icons/SettingsSharp'
import DeviceHubIcon from '@material-ui/icons/DeviceHubSharp'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooksSharp'
import ExitToAppIcon from '@material-ui/icons/ExitToAppSharp'

import Content from './Content'
import NotificationRenderer from '../../components/Interface/NotificationRenderer'

import { ROUTES } from '../routes.constants'

const { POSTS, IMAGES } = ROUTES.INTERFACE_ROUTES

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '100%',
    backgroundColor: theme.palette.primary.main
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: theme.spacing(9) + 1
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    overflow: 'auto'
  },
  navListItem: {
    '& > div': {
      width: '100%',
      textAlign: 'center'
    },
    '& .MuiListItemIcon-root': {
      minWidth: 'auto'
    }
  }
}))

function Interface({ match, location }) {
  const dispatch = useDispatch()
  const classes = useStyles()
  const { pathname } = location

  const goToRoute = route => dispatch(
    push(route)
  )

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={classes.appBar}
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
            Content Management
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={classnames(classes.drawer, classes.drawerClose)}
        classes={{
          paper: classes.drawerClose
        }}
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <ListItem
            button
            onClick={() => goToRoute(`${match.path}/${POSTS}`)}
            selected={pathname.startsWith(`${match.path}/${POSTS}`)}
            className={classes.navListItem}
          >
            <div>
              <ListItemIcon>
                <LibraryBooksIcon />
              </ListItemIcon>
              {pathname.startsWith(`${match.path}/${POSTS}`) &&
                <Typography variant="subtitle2">
                  Posts
                </Typography>
              }
            </div>
          </ListItem>
          <ListItem
            button
            onClick={() => goToRoute(`${match.path}/${IMAGES}`)}
            selected={pathname.startsWith(`${match.path}/${IMAGES}`)}
            className={classes.navListItem}
          >
            <div>
              <ListItemIcon>
                <PhotoIcon />
              </ListItemIcon>
              {pathname.startsWith(`${match.path}/${IMAGES}`) &&
                <Typography variant="subtitle2">
                  Images
                </Typography>
              }
            </div>
          </ListItem>
          <ListItem button className={classes.navListItem}>
            <div>
              <ListItemIcon>
                <DeviceHubIcon />
              </ListItemIcon>
            </div>
          </ListItem>
          <ListItem button className={classes.navListItem}>
            <div>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
            </div>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button className={classes.navListItem}>
            <div>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <Typography variant="subtitle2">
                Logout
              </Typography>
            </div>
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <Content match={match} />
      </main>
      <NotificationRenderer />
    </div>
  )
}

export default Interface
