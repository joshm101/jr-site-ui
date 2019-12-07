import useNotifications from './useNotifications'
import { testHook } from '../utils/testing'

let hookOutput

describe('useNotifications', () => {
  beforeEach(() => {
    testHook(() => {
      hookOutput = useNotifications()
    })
  })

  it('returns state', () => {
    expect(hookOutput).toHaveProperty('state')
  })

  it('returns actions', () => {
    expect(hookOutput).toHaveProperty('actions')
  })
})
