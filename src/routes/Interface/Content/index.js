import React from 'react'
import { Route } from 'react-router-dom'

import Posts from './Posts'
import ViewPost from './ViewPost'

const Content = ({ match, posts }) => (
  <div>
    <Route exact path={`${match.url}/`} component={Posts} />
    <Route path={`${match.url}/view-post/:_id`} component={ViewPost} />
  </div>
)

export default Content
