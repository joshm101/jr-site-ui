import { getPostTypesRoutine } from '../../actions'
import { mockPostTypes } from '../../utils/testing/mocks'
import postTypesReducer from '.'

const expectedInitialState = {
  data: [],
  retrievingPostTypes: false,
  errors: []
}

const expectedTriggerState = {
  ...expectedInitialState,
  retrievingPostTypes: true
}

const expectedSuccessState = {
  ...expectedInitialState,
  data: mockPostTypes
}

const expectedFailureState = {
  ...expectedInitialState,
  errors: ['no', 'bueno']
}

describe('post types reducer', () => {
  it('returns the initial state', () => {
    expect(
      postTypesReducer(undefined, {})
    ).toEqual(expectedInitialState)
  })

  it(`handles ${getPostTypesRoutine.TRIGGER}`, () => {
    const action = {
      type: getPostTypesRoutine.TRIGGER
    }

    expect(
      postTypesReducer(expectedInitialState, action)
    ).toEqual(expectedTriggerState)
  })

  it(`handles ${getPostTypesRoutine.SUCCESS}`, () => {
    const action = {
      type: getPostTypesRoutine.SUCCESS,
      payload: { data: mockPostTypes }
    }

    expect(
      postTypesReducer(expectedInitialState, action)
    ).toEqual(expectedSuccessState)
  })

  it(`handles ${getPostTypesRoutine.FAILURE}`, () => {
    const action = {
      type: getPostTypesRoutine.FAILURE,
      payload: ['no', 'bueno']
    }

    expect(
      postTypesReducer(expectedInitialState, action)
    ).toEqual(expectedFailureState)
  })
})
