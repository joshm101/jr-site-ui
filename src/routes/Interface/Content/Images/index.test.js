import React from 'react'
import { shallow } from 'enzyme'

import { ImagesNoWrap as Images } from './index'

const setup = overrideProps => {
  const props = { ...overrideProps }

  const wrapper = shallow(
    <Images {...props} />
  )

  return { wrapper, props }
}

describe('Images', () => {
  it('renders', () => {
    const { wrapper } = setup()

    expect(wrapper.exists()).toBe(true)
  })
})
