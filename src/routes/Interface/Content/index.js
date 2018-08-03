import React from 'react'
import { Route } from 'react-router-dom'

import Posts from './Posts'
import ViewPost from './ViewPost'
import Images from './Images'

const Content = ({ match, posts }) => (
  <div>
    <Route exact path={`${match.url}/`} component={Posts} />
    <Route path={`${match.url}/view-post/:_id`} component={ViewPost} />
    <Route path={`${match.url}/images`} component={Images} />
  </div>
)

export default Content
