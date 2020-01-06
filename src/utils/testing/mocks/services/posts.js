import { mockPost, mockPosts } from '../posts'

const createPost = data => new Promise(resolve => resolve({ data: mockPost }))
const updatePost = (id, data) => (
  new Promise(resolve =>
    resolve({ data: mockPost })
  )
)
const getPosts = () => (
  new Promise(resolve =>
    resolve({
      data: mockPosts,
      meta: { page: 1, pageSize: 10, total: mockPosts.length }
    })
  )
)

export { createPost, getPosts, updatePost }
