import React from 'react'
import { mount } from 'enzyme'

import { NewFolderDialogNoWrap as NewFolderDialog } from './index'

const uploadImagesProps = {
  definingNewFolder: true,
  folders: ['lorem', 'ipsum'],
  newFolderName: ''
}

const setup = overrideProps => {
  const props = {
    uploadImages: uploadImagesProps,
    ...overrideProps
  }

  const wrapper = mount(
    <NewFolderDialog {...props} />
  )

  return { props, wrapper }
}

describe('NewFolderDialog', () => {
  it('renders', () => {
    const { wrapper } = setup()

    expect(wrapper.exists()).toBe(true)
  })

  it('does not allow submission if the folder name is empty', () => {
    const submitMock = jest.fn()
    const { wrapper } = setup({
      uploadImagesDefineNewFolderSubmit: submitMock
    })

    const submitButton = wrapper.find('DialogActions Button').at(1)
    submitButton.simulate('click')
    expect(submitMock).toHaveBeenCalledTimes(0)
  })

  it('does not allow submission if the folder name already exists', () => {
    const submitMock = jest.fn()
    const { wrapper } = setup({
      uploadImages: {
        ...uploadImagesProps,
        newFolderName: 'lorem'
      },
      uploadImagesDefineNewFolderSubmit: submitMock
    })

    const submitButton = wrapper.find('DialogActions Button').at(1)
    submitButton.simulate('click')
    expect(submitMock).toHaveBeenCalledTimes(0)
  })

  it('displays a validation message when folder name is empty', () => {
    const { wrapper } = setup()

    const input = wrapper.find('TextField input')
    input.simulate('change', { target: { value: 'test' } })
    input.simulate('change', { target: { value: '' } })

    const emptyFolderNameValidation = wrapper.find('FormHelperText')
    const errorMessage = 'Folder name must not be empty.'
    expect(emptyFolderNameValidation.text()).toEqual(errorMessage)
  })

  it('displays a validation message when a folder name already exists', () => {
    const { wrapper } = setup({
      uploadImages: {
        ...uploadImagesProps,
        newFolderName: 'lorem'
      }
    })

    // so component considers input to have been "touched"
    const input = wrapper.find('TextField input')
    input.simulate('change', { target: { value: 'lorem' } })

    const emptyFolderNameValidation = wrapper.find('FormHelperText')
    const errorMessage = 'Folder name is already taken.'
    expect(emptyFolderNameValidation.text()).toEqual(errorMessage)
  })

  it('invokes the input change event function prop', () => {
    const changeEventMock = jest.fn()
    const { wrapper } = setup({
      uploadImagesDefineNewFolderValueChange: changeEventMock
    })

    const input = wrapper.find('TextField input')
    input.simulate('change', { target: { value: 'lorem' } })
    expect(changeEventMock).toHaveBeenCalledTimes(1)
    expect(changeEventMock).toHaveBeenCalledWith('lorem')
  })

  it('invokes the submit function prop', () => {
    const submitEventMock = jest.fn()
    const { wrapper } = setup({
      uploadImages: {
        ...uploadImagesProps,
        newFolderName: 'valid-name'
      },
      uploadImagesDefineNewFolderSubmit: submitEventMock
    })

    const submitButton = wrapper.find('DialogActions Button').at(1)
    submitButton.simulate('click')

    expect(submitEventMock).toHaveBeenCalledTimes(1)
  })

  it('invokes the cancel function prop', () => {
    const cancelEventMock = jest.fn()
    const { wrapper } = setup({
      uploadImagesDefineNewFolderCancel: cancelEventMock
    })

    const cancelButton = wrapper.find('DialogActions Button').at(0)
    cancelButton.simulate('click')

    expect(cancelEventMock).toHaveBeenCalledTimes(1)
  })
})
