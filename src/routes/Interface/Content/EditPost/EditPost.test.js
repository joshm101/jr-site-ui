import React from 'react'
import { MemoryRouter, Route } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress'
import { createMount } from '@material-ui/core/test-utils'

import {
  withTheme,
  configureMockStore,
  withProvider
} from '../../../../utils/testing'
import {
  createMockPostFormState,
  createMockPostsState,
  mockPosts
} from '../../../../utils/testing/mocks'
import EditPost from './EditPost'
import PostForm from '../../../../components/Interface/PostForm'
import PostNotFoundNotice from './PostNotFoundNotice'

let mount

const mockPostFormState = createMockPostFormState()

const configComponent = mockState => (
  withTheme(
    withProvider(
      EditPost,
      mockState
    )
  )
)

const setup = mockState => propOverrides => {
  const props = {
    ...propOverrides
  }

  configureMockStore(mockState)
  const Component = configComponent(mockState)

  const wrapper = mount(
    <MemoryRouter initialEntries={['/edit-post/1']}>
      <Route
        component={props => <Component {...props} />}
        path="/edit-post/:id"
      />
    </MemoryRouter>
  )

  return { wrapper, props }
}

describe('EditPost', () => {
  beforeAll(() => {
    mount = createMount()
  })

  it('displays loading indicator when retrieving post', () => {
    const mockState = createMockPostsState({
      retrievingPosts: true,
      data: []
    })

    const { wrapper } = setup({
      posts: mockState,
      postForm: mockPostFormState
    })()

    const notice = wrapper.find(PostNotFoundNotice)
    const loadingIndicator = wrapper.find(CircularProgress)
    const form = wrapper.find(PostForm)

    expect(notice.exists()).toBe(false)
    expect(loadingIndicator.exists()).toBe(true)
    expect(form.exists()).toBe(false)
  })

  it('displays post form when post has been retrieved', () => {
    const mockState = createMockPostsState({
      data: mockPosts
    })

    const { wrapper } = setup({
      posts: mockState,
      postForm: mockPostFormState
    })()

    const notice = wrapper.find(PostNotFoundNotice)
    const loadingIndicator = wrapper.find(CircularProgress)
    const form = wrapper.find(PostForm)
    expect(notice.exists()).toBe(false)
    expect(loadingIndicator.exists()).toBe(false)
    expect(form.exists()).toBe(true)
  })

  it('displays notice when post not found', () => {
    const mockState = createMockPostsState()

    const { wrapper } = setup({
      posts: mockState,
      postForm: mockPostFormState
    })()

    const notice = wrapper.find(PostNotFoundNotice)
    const loadingIndicator = wrapper.find(CircularProgress)
    const form = wrapper.find(PostForm)
    expect(notice.exists()).toBe(true)
    expect(loadingIndicator.exists()).toBe(false)
    expect(form.exists()).toBe(false)
  })
})
