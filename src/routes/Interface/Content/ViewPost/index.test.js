import React from 'react'
import { shallow } from 'enzyme'

import { ViewPostNoWrap as ViewPost } from './index'

const setup = overrideProps => {
  const props = { ...overrideProps }

  const wrapper = shallow(
    <ViewPost {...props} />
  )

  return { wrapper, props }
}

describe('ViewPost', () => {
  it('renders', () => {
    const { wrapper } = setup()

    expect(wrapper.exists()).toBe(true)
  })
})
