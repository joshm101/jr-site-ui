import { postTypeFormSubmitRoutine } from '../../actions'
import postTypeFormReducer from '.'

const expectedInitialState = {
  submitting: false,
  errors: []
}

const expectedSubmitTriggerState = {
  ...expectedInitialState,
  submitting: true
}

const expectedSubmitSuccessState = {
  ...expectedInitialState,
  submitting: false
}

const expectedSubmitFailureState = {
  ...expectedInitialState,
  errors: ['no', 'bueno']
}

describe('post type form reducer', () => {
  it('returns the initial state', () => {
    expect(
      postTypeFormReducer(undefined, {})
    ).toEqual(expectedInitialState)
  })

  it(`handles ${postTypeFormSubmitRoutine.TRIGGER}`, () => {
    const action = {
      type: postTypeFormSubmitRoutine.TRIGGER,
      payload: {}
    }

    expect(
      postTypeFormReducer(expectedInitialState, action)
    ).toEqual(expectedSubmitTriggerState)
  })

  it(`handles ${postTypeFormSubmitRoutine.SUCCESS}`, () => {
    const action = {
      type: postTypeFormSubmitRoutine.SUCCESS,
      payload: {}
    }

    expect(
      postTypeFormReducer(expectedInitialState, action)
    ).toEqual(expectedSubmitSuccessState)
  })

  it(`handles ${postTypeFormSubmitRoutine.FAILURE}`, () => {
    const action = {
      type: postTypeFormSubmitRoutine.FAILURE,
      payload: ['no', 'bueno']
    }

    expect(
      postTypeFormReducer(expectedInitialState, action)
    ).toEqual(expectedSubmitFailureState)
  })
})
