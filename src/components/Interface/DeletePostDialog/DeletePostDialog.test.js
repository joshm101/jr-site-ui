import React from 'react'
import { createMount } from '@material-ui/core/test-utils'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import Typography from '@material-ui/core/Typography'

import {
  configureMockStore,
  withProvider
} from '../../../utils/testing'
import {
  createMockDeletePostState
} from '../../../utils/testing/mocks'

import DeletePostDialog from './DeletePostDialog'

let mount

const getMockState = overrides => (
  createMockDeletePostState(overrides)
)

const configComponent = mockState => (
  withProvider(DeletePostDialog, mockState)
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

describe('DeletePostDialog', () => {
  beforeAll(() => {
    mount = createMount()
  })

  const mockState = getMockState({
    submittingRequest: false,
    errors: []
  })

  const mockPostTitle = 'mock-post'
  const mockPost = { title: mockPostTitle }

  it('displays post title in dialog message', () => {
    const props = { post: mockPost, open: true }

    const { wrapper } = setup({ deletePost: mockState })(props)

    const typographyElements = wrapper.find(Typography)

    const postTitleMessageElement = (
      typographyElements.findWhere(element =>
        element.text().includes(mockPostTitle)
      )
    )

    expect(postTitleMessageElement.exists()).toBe(true)
  })

  it('displays post title in dialog title', () => {
    const props = { post: mockPost, open: true }

    const { wrapper } = setup({ deletePost: mockState })(props)

    const dialogTitleElement = wrapper.find(DialogTitle)
    const hasTitle = (
      dialogTitleElement.text().includes(mockPostTitle)
    )
    expect(hasTitle).toBe(true)
  })

  it('invokes onCancel function prop', () => {
    const onCancel = jest.fn()
    const props = {
      post: mockPost,
      open: true,
      onCancel
    }

    const { wrapper } = setup({ deletePost: mockState })(props)

    const buttons = wrapper.find(DialogActions).find('button')
    const cancelButton = buttons.at(0)
    cancelButton.simulate('click')

    expect(onCancel.mock.calls.length).toBe(1)
  })
})
