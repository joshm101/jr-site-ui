import React from 'react'
import { createMount } from '@material-ui/core/test-utils'

import { withTheme } from '../../../../utils/testing'

import Submit from './Submit'

let mount

const SubmitWithSetup = withTheme(Submit)

const setup = propOverrides => {
  const props = {
    submitting: false,
    disabled: false,
    'data-test-id': 'post-form-submit',
    ...propOverrides
  }

  const wrapper = mount(
    <SubmitWithSetup {...props}>
      {props.submitting ?
        'Submitting...' :
        'Done'
      }
    </SubmitWithSetup>
  )

  return { wrapper, props }
}

describe('Post Form - Submit', () => {
  const buttonSelector = `button[data-test-id="post-form-submit"]`

  beforeAll(() => {
    mount = createMount()
  })

  it('displays loading indicator', () => {
    const { wrapper } = setup({ submitting: true })

    const loadingIndicator = wrapper.find(
      '[data-test-id="post-form-submit-indicator"]'
    )

    expect(loadingIndicator.exists()).toBe(true)
  })

  it('is disabled while form is submitting', () => {
    const { wrapper } = setup({ submitting: true })

    const button = wrapper.find(buttonSelector)

    expect(button.props().disabled).toBe(true)
  })
})
