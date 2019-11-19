import { mockPost } from '../posts'

const createPost = data => new Promise(resolve => resolve(mockPost))

export { createPost }
