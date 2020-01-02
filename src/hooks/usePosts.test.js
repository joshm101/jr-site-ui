import usePosts from './usePosts'
import { testHook } from '../utils/testing'

let hookOutput

describe('usePosts', () => {
  beforeEach(() => {
    testHook(() => {
      hookOutput = usePosts()
    })
  })

  it('returns state', () => {
    expect(hookOutput).toHaveProperty('state')
  })

  it('returns actions', () => {
    expect(hookOutput).toHaveProperty('actions')
  })
})
