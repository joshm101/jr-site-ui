import notificationsReducer from './index'
import {
  SHOW_NOTIFICATION,
  DISMISS_NOTIFICATION
} from '../../actions/actionTypes'

describe('notificationsReducer', () => {
  const notificationId = 'test123'
  const showNotificationAction = {
    type: SHOW_NOTIFICATION,
    payload: {
      id: notificationId,
      props: { test: 'foo' }
    }
  }
  const dismissNotificationAction = {
    type: DISMISS_NOTIFICATION,
    payload: notificationId
  }

  const expectedInitialState = {
    activeNotifications: [],
    notificationProps: {}
  }

  it('should return initial state', () => {
    const actualState = notificationsReducer(undefined, {})

    expect(actualState).toEqual(expectedInitialState)
  })

  it('should add notification', () => {
    const expectedState = {
      ...expectedInitialState,
      activeNotifications: [notificationId],
      notificationProps: {
        [notificationId]: { test: 'foo' }
      }
    }

    const actualState = notificationsReducer(
      undefined,
      showNotificationAction
    )

    expect(expectedState).toEqual(actualState)
  })

  it('should remove notification', () => {
    const initialState = {
      ...expectedInitialState,
      activeNotifications: [notificationId]
    }

    const expectedState = {
      activeNotifications: [],
      notificationProps: {
        [notificationId]: undefined
      }
    }

    const actualState = notificationsReducer(
      initialState,
      dismissNotificationAction
    )

    expect(actualState).toEqual(expectedState)
  })
})
