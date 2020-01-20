import deletePostReducer, { initialState } from './index'
import { deletePostRoutine } from '../../actions'

describe('delete post reducer', () => {
  it('returns initial state', () => {
    const expected = initialState
    const result = deletePostReducer(undefined, { type: 'foo' })

    expect(result).toEqual(expected)
  })

  it('handles delete post trigger action', () => {
    const expected = {
      submittingRequest: true, errors: []
    }

    const result = deletePostReducer(
      undefined,
      { type: deletePostRoutine.TRIGGER }
    )

    expect(result).toEqual(expected)
  })

  it('handles delete post success action', () => {
    const expected = {
      submittingRequest: false,
      errors: []
    }

    const result = deletePostReducer(
      undefined,
      { type: deletePostRoutine.SUCCESS }
    )

    expect(result).toEqual(expected)
  })

  it('handles delete post error action', () => {
    const expected = {
      submittingRequest: false,
      errors: ['oh', 'crap']
    }

    const result = deletePostReducer(
      undefined,
      {
        type: deletePostRoutine.FAILURE,
        payload: ['oh', 'crap']
      }
    )

    expect(result).toEqual(expected)
  })
})
