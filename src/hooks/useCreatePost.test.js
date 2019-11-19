import useCreatePost from './useCreatePost'
import { testHook } from '../utils/testing'

let hookOutput

describe('useCreatePost', () => {
  beforeEach(() => {
    testHook(() => {
      hookOutput = useCreatePost()
    })
  })

  it('returns state', () => {
    expect(hookOutput).toHaveProperty('state')
  })

  it('returns actions', () => {
    expect(hookOutput).toHaveProperty('actions')
  })
})
