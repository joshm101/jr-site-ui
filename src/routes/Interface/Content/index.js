import React from 'react'
import { Route } from 'react-router-dom'

import Posts from './Posts'
import Images from './Images'
import Integrations from './Integrations'
import Settings from './Settings'
import { ROUTES } from '../../routes.constants'

import './index.css'

const { INTERFACE_ROUTES } = ROUTES
const {
  POSTS,
  IMAGES,
  INTEGRATIONS,
  SETTINGS
} = INTERFACE_ROUTES

const Content = ({ match, posts }) => {
  return (
    <>
      <Route path={`${match.url}/${POSTS}`} component={Posts} />
      <Route path={`${match.url}/${IMAGES}`} component={Images} />
      <Route path={`${match.url}/${INTEGRATIONS}`} component={Integrations} />
      <Route path={`${match.url}/${SETTINGS}`} component={Settings} />
    </>
  )
}

export default Content
