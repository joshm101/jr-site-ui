import {
  SHOW_NOTIFICATION,
  DISMISS_NOTIFICATION
} from '../../actions/actionTypes'

const initialState = {
  activeNotifications: [],
  notificationProps: {}
}

const notificationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return {
        ...state,
        activeNotifications: [
          ...state.activeNotifications,
          action.payload.id
        ],
        notificationProps: {
          ...state.notificationProps,
          [action.payload.id]: action.payload.props
        }
      }
    case DISMISS_NOTIFICATION:
      const notificationIdIndex = (
        state.activeNotifications.findIndex(notificationId =>
          notificationId === action.payload
        )
      )

      return {
        ...state,
        activeNotifications: [
          ...state.activeNotifications.slice(
            0, notificationIdIndex
          ),
          ...state.activeNotifications.slice(
            notificationIdIndex + 1
          )
        ],
        notificationProps: {
          ...state.notificationProps,
          [action.payload]: undefined
        }
      }
    default:
      return state
  }
}

export default notificationsReducer
