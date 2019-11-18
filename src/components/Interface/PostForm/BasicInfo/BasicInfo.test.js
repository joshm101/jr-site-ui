import React from 'react'
import { createMount } from '@material-ui/core/test-utils'

import BasicInfo from './BasicInfo'
import { withTheme } from '../../../../utils/testing'
import { TITLE_ID, FEATURED_ID, DESCRIPTION_ID, EMBED_ID } from './BasicInfo.constants'

let mount

const BasicInfoWithSetup = withTheme(BasicInfo)

const setup = propOverrides => {
  const props = {
    errors: {},
    fieldInitializers: {
      text: () => ({}),
      checkbox: () => ({}),
      textarea: () => ({})
    },
    ...propOverrides
  }

  const wrapper = mount(
    <BasicInfoWithSetup {...props} />
  )

  return { wrapper, props }
}

const testFieldExists = fieldId => {
  const { wrapper } = setup()

  const selector = `[data-test-id="${fieldId}"]`

  const input = wrapper.find(selector)

  expect(input.exists()).toBe(true)
}

describe('PostForm - BasicInfo', () => {
  beforeAll(() => {
    mount = createMount()
  })

  it('renders title input', () => {
    testFieldExists(TITLE_ID)
  })

  it('renders featured input', () => {
    testFieldExists(FEATURED_ID)
  })

  it('renders description input', () => {
    testFieldExists(DESCRIPTION_ID)
  })

  it('renders embed code input', () => {
    testFieldExists(EMBED_ID)
  })
})
