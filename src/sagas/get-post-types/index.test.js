import { testSaga } from 'redux-saga-test-plan'

import { getPostTypesRoutine } from '../../actions'
import { mockPostTypes } from '../../utils/testing/mocks'

import { handleGetPostTypes } from '.'

describe('get post types saga', () => {
  it('can get post types', () => {
    const successAction = {
      type: getPostTypesRoutine.SUCCESS,
      payload: { data: mockPostTypes }
    }

    testSaga(handleGetPostTypes)
      .next()
      .next({ data: mockPostTypes })
      .put(successAction)
  })
})
