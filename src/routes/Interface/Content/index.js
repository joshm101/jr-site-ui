import React from 'react'
import { Route } from 'react-router-dom'

import Posts from './Posts'
import ViewPost from './ViewPost'
import Images from './Images'
import UploadImages from './UploadImages'
import CreatePost from './CreatePost'

import './index.css'

const Content = ({ match, posts }) => (
  <div className="interface-content-routes-container">
    <Route exact path={`${match.url}/`} component={Posts} />
    <Route exact path={`${match.url}/create-post`} component={CreatePost} />
    <Route path={`${match.url}/view-post/:_id`} component={ViewPost} />
    <Route exact path={`${match.url}/images`} component={Images} />
    <Route path={`${match.url}/images/upload`} component={UploadImages} />
  </div>
)

export default Content
