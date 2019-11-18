export const MIN_STEP = 1
export const MAX_STEP = 3
export const STEP_IDS = {
  POST_INFO: 'post-info',
  POST_COVER_IMAGE: 'post-cover-image',
  POST_IMAGES: 'post-images'
}
export const CURRENT_STEP_ROOT = 'post-form-step'

export const STEPS = [
  {
    title: 'Post Info',
    id: STEP_IDS.POST_INFO
  },
  {
    title: 'Post Cover',
    id: STEP_IDS.POST_COVER_IMAGE
  },
  {
    title: 'Post Images',
    id: STEP_IDS.POST_IMAGES
  }
]
