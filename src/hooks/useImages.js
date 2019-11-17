import { useSelector } from 'react-redux'

function useImages() {
  const images = useSelector(state => state.images)

  return images
}

export default useImages
