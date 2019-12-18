import React from 'react'
import { Route } from 'react-router-dom'
import Container from '@material-ui/core/Container'

import Dashboard from './Dashboard'
import ViewPost from './ViewPost'
import Images from './Images'
import UploadImages from './UploadImages'
import CreatePost from './CreatePost'
import { ROUTES } from '../../routes.constants'

import './index.css'

const { INTERFACE_ROUTES } = ROUTES
const {
  HOME: INTERFACE_HOME,
  CREATE_POST,
  VIEW_POST,
  IMAGES,
  UPLOAD_IMAGES
} = INTERFACE_ROUTES

const Content = ({ match, posts }) => (
  <Container>
    <Route exact path={`${match.url}/${INTERFACE_HOME}`} component={Dashboard} />
    <Route exact path={`${match.url}/${CREATE_POST}`} component={CreatePost} />
    <Route path={`${match.url}/${VIEW_POST}/:id`} component={ViewPost} />
    <Route exact path={`${match.url}/${IMAGES}`} component={Images} />
    <Route path={`${match.url}/${UPLOAD_IMAGES}`} component={UploadImages} />
  </Container>
)

export default Content
