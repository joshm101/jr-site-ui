import React from 'react'
import { createMount } from '@material-ui/core/test-utils'

import { withTheme } from '../../../../utils/testing'
import FormActions, { Back, Next, Submit } from '.'

let mount

const FormActionsWithSetup = withTheme(FormActions)

const nextButtonTestId = 'form-actions--next'
const submitButtonTestId = 'form-actions--submit'

const nextButtonSelector = `[data-test-id="${nextButtonTestId}"]`
const submitButtonSelector = `[data-test-id="${submitButtonTestId}"]`

const setup = propOverrides => {
  const props = {
    backButton: <Back />,
    nextButton: <Next data-test-id={nextButtonTestId} />,
    submitButton: <Submit data-test-id={submitButtonTestId} />,
    showSubmit: false,
    numSteps: 2,
    activeStep: 1,
    ...propOverrides
  }

  const wrapper = mount(
    <FormActionsWithSetup {...props} />
  )

  return { wrapper, props }
}

describe('FormActions', () => {
  beforeAll(() => {
    mount = createMount()
  })

  it('renders next button when showSubmit is false', () => {
    const { wrapper } = setup()

    const nextButton = wrapper.find(nextButtonSelector)
    const submitButton = wrapper.find(submitButtonSelector)

    expect(nextButton.exists()).toBe(true)
    expect(submitButton.exists()).toBe(false)
  })

  it('renders submit button when showSubmit is true', () => {
    const { wrapper } = setup({ showSubmit: true })

    const submitButton = wrapper.find(submitButtonSelector)
    const nextButton = wrapper.find(nextButtonSelector)

    expect(submitButton.exists()).toBe(true)
    expect(nextButton.exists()).toBe(false)
  })
})
