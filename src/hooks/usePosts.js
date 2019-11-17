import { useSelector } from 'react-redux'

function usePosts() {
  const posts = useSelector(state => state.posts)

  return posts
}

export default usePosts
