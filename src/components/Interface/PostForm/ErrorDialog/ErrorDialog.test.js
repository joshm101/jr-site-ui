import React from 'react'
import { createMount } from '@material-ui/core/test-utils'

import {
  withTheme,
  configureMockStore,
  withProvider
} from '../../../../utils/testing'
import {
  createMockCreatePostState
} from '../../../../utils/testing/mocks'

import ErrorDialog, { ROOT_ELEMENT_ID } from './ErrorDialog'

let mount

const mockErrorsState = {
  errors: ['something', 'went', 'wrong']
}

const mockState = createMockCreatePostState(mockErrorsState)
const mockInitialState = createMockCreatePostState()

const setup = (propOverrides, stateOverrides) => {
  const props = { ...propOverrides }

  const ErrorDialogWithSetup = withTheme(
    withProvider(
      ErrorDialog,
      { createPost: { ...mockState, ...stateOverrides } }
    )
  )

  const wrapper = mount(
    <ErrorDialogWithSetup {...props} />
  )

  return { wrapper, props }
}

describe('Post Form - Error Dialog', () => {
  beforeAll(() => {
    mount = createMount()
  })

  const dialogSelector = (
    `div[data-test-id="${ROOT_ELEMENT_ID}"][role="presentation"]`
  )

  it('does not render when there are no errors in state', () => {
    const { wrapper } = setup(undefined, mockInitialState)

    const dialog = wrapper.find(dialogSelector)

    expect(dialog.exists()).toBe(false)
  })

  it('renders when there are errors in state', () => {
    configureMockStore({ createPost: mockState })

    const { wrapper } = setup()

    const dialog = wrapper.find(dialogSelector)

    expect(dialog.exists()).toBe(true)
  })
})
