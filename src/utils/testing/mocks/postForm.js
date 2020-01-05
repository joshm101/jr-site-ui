import { initialState } from '../../../reducers/post-form'

const createMockPostFormState = overrides => ({
  ...initialState,
  ...overrides
})

export { createMockPostFormState }
