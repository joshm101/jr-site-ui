import React from 'react'

import { useNotifications } from '../../../hooks'

import
InvalidFilesNotification,
{
  NOTIFICATION_ID as INVALID_FILES_NOTIFICATION_ID
} from '../../../routes/Interface/Content/UploadImages/InvalidFilesNotice'

import ImagesUploadingNotice,
{
  NOTIFICATION_ID as IMAGES_UPLOADING_NOTIFICATION_ID
} from '../../../routes/Interface/Content/UploadImages/ImagesUploadingNotice'

import LoginAuthErrorNotice,
{
  NOTIFICATION_ID as AUTH_ERROR_NOTIFICATION_ID
} from '../../../routes/Login/LoginAuthErrorNotice'

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

  const createProps = notificationId => {
    return {
      ...getNotificationProps(notificationId),
      onClose: dismissNotification(notificationId),
      open: notificationIsOpen(notificationId)
    }
  }

  return (
    <>
      <InvalidFilesNotification
        {...createProps(INVALID_FILES_NOTIFICATION_ID)}
      />

      <ImagesUploadingNotice
        {...createProps(IMAGES_UPLOADING_NOTIFICATION_ID)}
      />
      <LoginAuthErrorNotice
        {...createProps(AUTH_ERROR_NOTIFICATION_ID)}
      />
    </>
  )
}

export default NotificationRenderer
