import React from 'react'
import { shallow } from 'enzyme'

import InvalidFilesNotice from './index'

const setup = overrideProps => {
  const props = { ...overrideProps }

  const wrapper = shallow(
    <InvalidFilesNotice {...props} />
  )

  return { wrapper, props }
}

describe('InvalidFilesNotice', () => {
  it('renders', () => {
    const { wrapper } = setup()

    expect(wrapper.exists()).toBe(true)
  })
})
