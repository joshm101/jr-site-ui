import React from 'react'

import { useNotifications } from '../../../hooks'

import
InvalidFilesNotification,
{
  NOTIFICATION_ID as INVALID_FILES_NOTIFICATION_ID
}
  from '../../../routes/Interface/Content/UploadImages/InvalidFilesNotice'

function NotificationRenderer() {
  const { state, actions } = useNotifications()

  const { activeNotifications, notificationProps } = state

  const notificationIsOpen = notificationId => {
    return activeNotifications.includes(notificationId)
  }

  const getNotificationProps = notificationId => {
    return notificationProps[notificationId]
  }

  const dismissNotification = notificationId => () => {
    actions.dismissNotification(notificationId)
  }

  return (
    <>
      <InvalidFilesNotification
        {...getNotificationProps(INVALID_FILES_NOTIFICATION_ID)}
        onClose={dismissNotification(INVALID_FILES_NOTIFICATION_ID)}
        open={notificationIsOpen(INVALID_FILES_NOTIFICATION_ID)}
      />
    </>
  )
}

export default NotificationRenderer
