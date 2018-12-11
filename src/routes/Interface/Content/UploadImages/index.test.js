import React from 'react'
import { shallow } from 'enzyme'

import { UploadImagesNoWrap as UploadImages } from './index'

const setup = overrideProps => {
  const props = { ...overrideProps }

  const wrapper = shallow(
    <UploadImages {...props} />
  )

  return { wrapper, props }
}

describe('UploadImages', () => {
  it('renders', () => {
    const { wrapper } = setup()

    expect(wrapper.exists()).toBe(true)
  })
})
