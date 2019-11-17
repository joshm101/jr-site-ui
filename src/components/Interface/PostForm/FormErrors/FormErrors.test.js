import React from 'react'
import { createMount } from '@material-ui/core/test-utils'

import { withTheme } from '../../../../utils/testing'

import FormErrors from './FormErrors'

const FormErrorsWithSetup = withTheme(FormErrors)

let mount

const errors = ['no good', 'no bueno']
const errorTestId = 'form-error'

const setup = propOverrides => {
  const props = {
    errors,
    'data-test-id': errorTestId,
    ...propOverrides
  }

  const wrapper = mount(
    <FormErrorsWithSetup {...props} />
  )

  return { wrapper, props }
}

describe('FormErrors', () => {
  beforeAll(() => {
    mount = createMount()
  })

  it('renders form validation errors', () => {
    const { wrapper } = setup()

    const selector = `span[data-test-id="${errorTestId}"]`

    const renderedErrors = wrapper.find(selector)

    expect(renderedErrors.length).toBe(errors.length)
  })
})
