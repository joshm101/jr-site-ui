import mockPosts from './mock-posts'

const initialState = {
  data: mockPosts
}

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default postsReducer
