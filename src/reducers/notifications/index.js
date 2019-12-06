import {
  SHOW_NOTIFICATION,
  DISMISS_NOTIFICATION
} from '../../actions/actionTypes'

const initialState = {
  activeNotifications: []
}

const notificationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return {
        ...state,
        activeNotifications: [
          ...state.activeNotifications,
          action.payload
        ]
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
        ]
      }
    default:
      return state
  }
}

export default notificationsReducer
