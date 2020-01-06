import usePostForm from './usePostForm'
import { testHook } from '../utils/testing'

let hookOutput

describe('usePostForm', () => {
  beforeEach(() => {
    testHook(() => {
      hookOutput = usePostForm()
    })
  })

  it('returns state', () => {
    expect(hookOutput).toHaveProperty('state')
  })

  it('returns actions', () => {
    expect(hookOutput).toHaveProperty('actions')
  })
})
