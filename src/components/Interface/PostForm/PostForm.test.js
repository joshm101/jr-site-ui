import React from 'react'
import { createMount } from '@material-ui/core/test-utils'

import { withTheme, configureMockStore, withProvider } from '../../../utils/testing'
import {
  mockImagesState,
  createMockPostFormState
} from '../../../utils/testing/mocks'
import PostForm, {
  ROOT_ELEMENT_ID,
  generateInitialFormValues
} from './PostForm'
import {
  MIN_STEP,
  MAX_STEP,
  STEP_IDS,
  STEPS,
  CURRENT_STEP_ROOT
} from './PostForm.constants'

let mount

const mockPostFormState = createMockPostFormState()

const PostFormWithSetup = withTheme(
  withProvider(
    PostForm,
    {
      images: mockImagesState,
      postForm: mockPostFormState
    }
  )
)

const setup = propOverrides => {
  const props = { ...propOverrides }
  configureMockStore({ images: mockImagesState })

  const wrapper = mount(
    <PostFormWithSetup {...props} />
  )

  return { wrapper, props }
}

describe('Post Form', () => {
  beforeAll(() => {
    mount = createMount()
  })

  const nextButtonTestId = `${ROOT_ELEMENT_ID}--actions-next`
  const nextButtonSelector = `button[data-test-id="${nextButtonTestId}"]`

  const stepIndexFinder = id => step => step.id === id

  const stepRenderingTester = stepId => {
    const { wrapper } = setup()

    const nextButton = wrapper.find(nextButtonSelector)

    const stepRootSelector = (
      `${CURRENT_STEP_ROOT}--${stepId}`
    )

    // get position of step being tested
    const stepIndex = STEPS.findIndex(
      stepIndexFinder(stepId)
    )

    // go to step being tested
    for (let i = 0; i < stepIndex; ++i) {
      nextButton.simulate('click')
    }

    const stepRoot = wrapper.find(
      `[data-test-id="${stepRootSelector}"]`
    )

    expect(stepRoot.exists()).toBe(true)
  }

  it('shows form actions', () => {
    const { wrapper } = setup()

    const formActions = wrapper.find('FormActions')

    expect(formActions.exists()).toBe(true)
  })

  it('shows validation errors on last step', () => {
    const { wrapper } = setup()

    const nextButton = wrapper.find(nextButtonSelector)

    for (let i = MIN_STEP; i < MAX_STEP; ++i) {
      nextButton.simulate('click')
    }

    const formErrors = wrapper.find('FormErrors')

    expect(formErrors.exists()).toBe(true)
  })

  it('does not show validation errors if not on last step', () => {
    const { wrapper } = setup()

    const nextButton = wrapper.find(nextButtonSelector)

    for (let i = MIN_STEP; i < MAX_STEP - 1; ++i) {
      nextButton.simulate('click')
      const formErrors = wrapper.find('FormErrors')
      expect(formErrors.exists()).toBe(false)
    }
  })

  it('renders post info step', () => {
    stepRenderingTester(STEP_IDS.POST_INFO)
  })

  it('renders cover image select step', () => {
    stepRenderingTester(STEP_IDS.POST_COVER_IMAGE)
  })

  it('renders images select step', () => {
    stepRenderingTester(STEP_IDS.POST_IMAGES)
  })

  it('generates initial default form values', () => {
    const expectedInitialValues = {
      title: '',
      description: '',
      embedContent: '',
      images: [],
      thumbnailImage: '',
      featured: false
    }

    const actualInitialValues = generateInitialFormValues()

    expect(actualInitialValues).toEqual(expectedInitialValues)
  })

  it('generates initial prefilled values from post', () => {
    const post = {
      title: 'some-title',
      description: 'some description',
      embedContent: '',
      images: ['foo.jpg'],
      thumbnailImage: 'bar.jpg',
      featured: true
    }

    const expectedInitialValues = {
      title: 'some-title',
      description: 'some description',
      embedContent: '',
      images: ['foo.jpg'],
      thumbnailImage: 'bar.jpg',
      featured: true
    }

    const actualInitialValues = generateInitialFormValues(post)

    expect(actualInitialValues).toEqual(expectedInitialValues)
  })
})
