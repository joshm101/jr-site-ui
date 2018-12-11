import React from 'react'
import { shallow } from 'enzyme'

import { SuccessDialogNoWrap as SuccessDialog } from './index'

const setup = overrideProps => {
  const props = { ...overrideProps }

  const wrapper = shallow(
    <SuccessDialog {...props} />
  )

  return { wrapper, props }
}

describe('SuccessDialog', () => {
  it('renders', () => {
    const { wrapper } = setup()

    expect(wrapper.exists()).toBe(true)
  })
})
