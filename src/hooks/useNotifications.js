import { useSelector, useDispatch } from 'react-redux'

import {
  showNotification,
  dismissNotification
} from '../actions'

function useNotifications() {
  const dispatch = useDispatch()
  const notificationsState = useSelector(state => state.notifications)

  const notificationActions = {
    showNotification: (...args) => dispatch(
      showNotification(...args)
    ),
    dismissNotification: (...args) => dispatch(
      dismissNotification(...args)
    )
  }

  return {
    state: notificationsState,
    actions: notificationActions
  }
}

export default useNotifications
