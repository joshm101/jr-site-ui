import { initialState } from '../../../reducers/delete-post'

const createMockDeletePostState = overrides => ({
  ...initialState,
  ...overrides
})

export { createMockDeletePostState }
