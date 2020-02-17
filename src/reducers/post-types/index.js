import { getPostTypesRoutine } from '../../actions'

const initialState = {
  data: [],
  retrievingPostTypes: false,
  errors: []
}

const postTypesReducer = (state = initialState, action) => {
  switch (action.type) {
    case getPostTypesRoutine.TRIGGER:
      return {
        ...state,
        retrievingPostTypes: true
      }
    case getPostTypesRoutine.SUCCESS:
      return {
        ...state,
        ...action.payload,
        retrievingPostTypes: false
      }
    case getPostTypesRoutine.FAILURE:
      return {
        ...state,
        retrievingPostTypes: false,
        errors: action.payload
      }
    default:
      return state
  }
}

export default postTypesReducer
