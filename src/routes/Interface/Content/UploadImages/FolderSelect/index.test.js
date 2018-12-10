import React from 'react'
import { shallow } from 'enzyme'

import { FolderSelectNoWrap as FolderSelect } from './index'

const setup = overrideProps => {
  const props = { ...overrideProps }

  const wrapper = shallow(
    <FolderSelect {...props} />
  )

  return { props, wrapper }
}

describe('FolderSelect', () => {
  it('renders', () => {
    const { wrapper } = setup()

    expect(wrapper.exists()).toBe(true)
  })
})
