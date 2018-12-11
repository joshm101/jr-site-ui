import React from 'react'
import { mount } from 'enzyme'

import SubmitButton from './index'

const setup = overrideProps => {
  const props = { ...overrideProps }

  const wrapper = mount(
    <SubmitButton {...props} />
  )

  return { wrapper, props }
}

describe('SubmitButton', () => {
  it('renders', () => {
    const { wrapper } = setup()

    expect(wrapper.exists()).toBe(true)
  })

  it('renders a loading button when uploadingImages is true', () => {
    const { wrapper } = setup({ uploadingImages: true })

    const button = wrapper.find('Button')

    expect(button.props().disabled).toBe(true)
    expect(
      button.text().includes('Uploading selected images...')
    ).toBe(true)
  })

  it('renders a submit button when uploadingImages is false', () => {
    const { wrapper } = setup()

    const button = wrapper.find('Button')

    expect(button.props().disabled).toBe(false)
    expect(
      button.text().includes('Upload selected images...')
    )
  })
})
