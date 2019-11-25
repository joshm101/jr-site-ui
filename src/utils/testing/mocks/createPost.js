import { initialState } from '../../../reducers/create-post'

const createMockCreatePostState = overrides => ({
  ...initialState,
  ...overrides
})

export { createMockCreatePostState }
