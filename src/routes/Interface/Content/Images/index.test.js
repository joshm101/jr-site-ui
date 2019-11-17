import React from 'react'
import { Provider } from 'react-redux'
import mockStore from 'redux-mock-store'

import { shallow } from 'enzyme'

import Images from './index'

const setup = overrideProps => {
  const createMockStore = mockStore([])
  const store = createMockStore()

  const props = { ...overrideProps }

  const wrapper = shallow(
    <Provider store={store}>
      <Images {...props} />
    </Provider>
  )

  return { wrapper, props }
}

describe('Images', () => {
  it('renders', () => {
    const { wrapper } = setup()

    expect(wrapper.exists()).toBe(true)
  })
})
