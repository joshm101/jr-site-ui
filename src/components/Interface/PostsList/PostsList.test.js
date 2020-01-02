import React from 'react'
import { createMount } from '@material-ui/core/test-utils'
import LinearProgress from '@material-ui/core/LinearProgress'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

import { withTheme, configureMockStore, withProvider } from '../../../utils/testing'
import { createMockPostsState, mockPosts } from '../../../utils/testing/mocks'

import PostsList from './PostsList'
import NoPostsNotice from './NoPostsNotice'

let mount

const getMockState = overrides => (
  createMockPostsState(overrides)
)

const configComponent = mockState => (
  withTheme(
    withProvider(
      PostsList,
      mockState
    )
  )
)

const setup = mockState => propOverrides => {
  const props = { ...propOverrides }

  configureMockStore(mockState)
  const Component = configComponent(mockState)

  const wrapper = mount(
    <Component {...props} />
  )

  return { wrapper, props }
}

describe('PostsList', () => {
  beforeAll(() => {
    mount = createMount()
  })

  it('displays posts list', () => {
    const mockState = getMockState({
      data: mockPosts
    })

    const { wrapper } = setup({ posts: mockState })()

    const postsList = wrapper.find(List)
    const postsListItems = wrapper.find(ListItem)

    expect(postsList.exists()).toBe(true)
    expect(postsListItems.exists()).toBe(true)
    expect(postsListItems.length).toEqual(mockPosts.length)
  })

  it('displays loading indicator when retrieving posts', () => {
    const mockState = getMockState({
      retrievingPosts: true
    })

    const { wrapper } = setup({ posts: mockState })()

    const loadingIndicator = wrapper.find(LinearProgress)

    expect(loadingIndicator.exists()).toBe(true)
  })

  it('displays no posts notice when there are no posts', () => {
    const mockState = getMockState({
      data: [],
      retrievingPosts: false
    })

    const { wrapper } = setup({ posts: mockState })()

    const notice = wrapper.find(NoPostsNotice)

    expect(notice.exists()).toBe(true)
  })
})
