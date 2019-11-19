import { createPostRoutine } from '../../actions'
import {
  DISMISS_CREATE_POST_SUCCESS_NOTICE,
  DISMISS_CREATE_POST_FAILURE_NOTICE
} from '../../actions/actionTypes'

import createPostReducer from '.'

const expectedInitialState = {
  submitting: false,
  errors: [],
  displaySuccessNotification: false
}

const expectedCreatePostTriggerState = {
  ...expectedInitialState,
  submitting: true
}

const expectedCreatePostSuccessState = {
  ...expectedInitialState,
  submitting: false,
  displaySuccessNotification: true
}

const expectedCreatePostFailureState = {
  ...expectedInitialState,
  submitting: false,
  errors: ['no', 'bueno']
}

const expectedDismissSuccessNoticeState = {
  ...expectedInitialState,
  displaySuccessNotification: false
}

const expectedDismissFailureNoticeState = {
  ...expectedInitialState,
  errors: []
}

describe('create post reducer', () => {
  it('returns the initial state', () => {
    expect(
      createPostReducer(undefined, {})
    ).toEqual(expectedInitialState)
  })

  it(`handles ${createPostRoutine.TRIGGER}`, () => {
    const action = {
      type: createPostRoutine.TRIGGER,
      payload: {}
    }

    expect(
      createPostReducer(expectedInitialState, action)
    ).toEqual(expectedCreatePostTriggerState)
  })

  it(`handles ${createPostRoutine.SUCCESS}`, () => {
    const action = {
      type: createPostRoutine.SUCCESS,
      payload: {}
    }

    expect(
      createPostReducer(expectedInitialState, action)
    ).toEqual(expectedCreatePostSuccessState)
  })

  it(`handles ${createPostRoutine.FAILURE}`, () => {
    const action = {
      type: createPostRoutine.FAILURE,
      payload: ['no', 'bueno']
    }

    expect(
      createPostReducer(expectedInitialState, action)
    ).toEqual(expectedCreatePostFailureState)
  })

  it(`handles ${DISMISS_CREATE_POST_SUCCESS_NOTICE}`, () => {
    const action = {
      type: DISMISS_CREATE_POST_SUCCESS_NOTICE
    }

    expect(
      createPostReducer(expectedInitialState, action)
    ).toEqual(expectedDismissSuccessNoticeState)
  })

  it(`handles ${DISMISS_CREATE_POST_FAILURE_NOTICE}`, () => {
    const action = {
      type: DISMISS_CREATE_POST_FAILURE_NOTICE
    }

    expect(
      createPostReducer(expectedInitialState, action)
    ).toEqual(expectedDismissFailureNoticeState)
  })
})
