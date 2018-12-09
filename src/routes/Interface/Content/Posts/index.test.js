import React from 'react'
import { shallow } from 'enzyme'

import { PostsNoWrap as Posts } from './index'

const setup = overrideProps => {
  const props = { ...overrideProps }

  const wrapper = shallow(
    <Posts {...props} />
  )

  return { props, wrapper }
}

describe('Posts', () => {
  it('renders', () => {
    const { wrapper } = setup()

    expect(wrapper.exists()).toBe(true)
  })
})
