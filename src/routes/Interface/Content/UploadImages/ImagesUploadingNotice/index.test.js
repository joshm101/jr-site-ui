import React from 'react'
import { shallow } from 'enzyme'

import ImagesUploadingNotice from './index'

const setup = overrideProps => {
  const props = { ...overrideProps }

  const wrapper = shallow(
    <ImagesUploadingNotice {...props} />
  )

  return { props, wrapper }
}

describe('ImagesUploadingNotice', () => {
  it('renders', () => {
    const { wrapper } = setup()

    expect(wrapper.exists()).toBe(true)
  })
})
