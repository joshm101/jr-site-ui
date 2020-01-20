import { postFormSubmitRoutine } from '../../actions'
import {
  DISMISS_POST_FORM_SUBMIT_FAILURE_NOTICE
} from '../../actions/actionTypes'

import postFormReducer from '.'

const expectedInitialState = {
  submitting: false,
  errors: [],
  displaySuccessNotification: false
}

const expectedPostFormSubmitTriggerState = {
  ...expectedInitialState,
  submitting: true
}

const expectedPostFormSubmitSuccessState = {
  ...expectedInitialState,
  submitting: false,
  displaySuccessNotification: true
}

const expectedPostFormSubmitFailureState = {
  ...expectedInitialState,
  submitting: false,
  errors: ['no', 'bueno']
}

const expectedDismissFailureNoticeState = {
  ...expectedInitialState,
  errors: []
}

describe('post form reducer', () => {
  it('returns the initial state', () => {
    expect(
      postFormReducer(undefined, {})
    ).toEqual(expectedInitialState)
  })

  it(`handles ${postFormSubmitRoutine.TRIGGER}`, () => {
    const action = {
      type: postFormSubmitRoutine.TRIGGER,
      payload: {}
    }

    expect(
      postFormReducer(expectedInitialState, action)
    ).toEqual(expectedPostFormSubmitTriggerState)
  })

  it(`handles ${postFormSubmitRoutine.SUCCESS}`, () => {
    const action = {
      type: postFormSubmitRoutine.SUCCESS,
      payload: {}
    }

    expect(
      postFormReducer(expectedInitialState, action)
    ).toEqual(expectedPostFormSubmitSuccessState)
  })

  it(`handles ${postFormSubmitRoutine.FAILURE}`, () => {
    const action = {
      type: postFormSubmitRoutine.FAILURE,
      payload: ['no', 'bueno']
    }

    expect(
      postFormReducer(expectedInitialState, action)
    ).toEqual(expectedPostFormSubmitFailureState)
  })

  it(`handles ${DISMISS_POST_FORM_SUBMIT_FAILURE_NOTICE}`, () => {
    const action = {
      type: DISMISS_POST_FORM_SUBMIT_FAILURE_NOTICE
    }

    expect(
      postFormReducer(expectedInitialState, action)
    ).toEqual(expectedDismissFailureNoticeState)
  })
})
