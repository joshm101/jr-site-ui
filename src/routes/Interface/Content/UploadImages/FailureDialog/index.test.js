import React from 'react'
import { mount } from 'enzyme'

import { FailureDialogNoWrap as FailureDialog } from './index'

const setup = overrideProps => {
  const props = { ...overrideProps }

  const wrapper = mount(
    <FailureDialog {...props} />
  )

  return { wrapper, props }
}

describe('FailureDialog', () => {
  it('renders', () => {
    const { wrapper } = setup()

    expect(wrapper.exists()).toBe(true)
  })

  it('is open if there are errors', () => {
    const { wrapper } = setup({
      uploadImages: { errors: ['error1', 'error2'] }
    })

    const dialog = wrapper.find('Dialog')
    expect(dialog.props().open).toBe(true)
  })

  it('is closed if there are no errors', () => {
    const { wrapper } = setup({
      uploadImages: { errors: [] }
    })

    const dialog = wrapper.find('Dialog')
    expect(dialog.props().open).toBe(false)
  })

  it('invokes callback function on dismiss button press', () => {
    const dismissUploadImagesFailureNotice = jest.fn()
    const { wrapper } = setup({
      dismissUploadImagesFailureNotice,
      uploadImages: { errors: ['error1', 'error2'] }
    })

    const dialog = wrapper.find('Dialog')
    expect(dialog.props().open).toBe(true)

    const dialogDismissButton = dialog.find('Button')
    dialogDismissButton.simulate('click')

    expect(dismissUploadImagesFailureNotice).toHaveBeenCalledTimes(1)
  })
})
