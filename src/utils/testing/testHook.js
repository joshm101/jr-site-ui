// credits to https://tinyurl.com/th6apo7 for this utility
import React from 'react'
import { mount } from 'enzyme'

import withProvider from './withProvider'

const TestHook = ({ callback }) => {
  callback()

  return null
}

const TestHookWithProvider = withProvider(TestHook)

const testHook = callback => {
  mount(<TestHookWithProvider callback={callback} />)
}

export default testHook
