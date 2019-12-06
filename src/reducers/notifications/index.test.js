import notificationsReducer from './index'
import {
  SHOW_NOTIFICATION,
  DISMISS_NOTIFICATION
} from '../../actions/actionTypes'

describe('notificationsReducer', () => {
  const notificationId = 'test123'
  const showNotificationAction = {
    type: SHOW_NOTIFICATION,
    payload: notificationId
  }
  const dismissNotificationAction = {
    type: DISMISS_NOTIFICATION,
    payload: notificationId
  }

  it('should return initial state', () => {
    const expectedState = { activeNotifications: [] }

    const actualState = notificationsReducer(undefined, {})

    expect(actualState).toEqual(expectedState)
  })

  it('should add notification ID', () => {
    const notificationId = 'test123'

    const expectedState = {
      activeNotifications: [notificationId]
    }

    const actualState = notificationsReducer(
      undefined,
      showNotificationAction
    )

    expect(expectedState).toEqual(actualState)
  })

  it('should remove notification ID', () => {
    const initialState = {
      activeNotifications: []
    }

    const expectedState = { activeNotifications: [] }

    const actualState = notificationsReducer(
      initialState,
      dismissNotificationAction
    )

    expect(actualState).toEqual(expectedState)
  })
})
