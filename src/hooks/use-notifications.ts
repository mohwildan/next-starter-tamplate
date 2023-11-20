import { NotificationData, notifications } from '@mantine/notifications'
import { NotificationProps } from '@mantine/core'

const useNotifications = () => {
  const success = (v: NotificationData | string, options?: NotificationProps) => {
    if (typeof v === 'string') {
      notifications.show({
        title: 'Success',
        message: v,
        color: 'success',
        ...options
      })
    } else {
      notifications.show(v)
    }
  }
  const error = (v: NotificationData | string, options?: NotificationData) => {
    if (typeof v === 'string') {
      notifications.show({
        title: 'Error',
        message: v,
        color: 'danger',
        ...options
      })
    } else {
      notifications.show(v)
    }
  }
  const info = (v: NotificationData | string, options?: NotificationData) => {
    if (typeof v === 'string') {
      notifications.show({
        title: 'Info',
        message: v,
        color: 'info',
        ...options
      })
    } else {
      notifications.show(v)
    }
  }

  const warning = (v: NotificationData | string, options?: NotificationProps) => {
    if (typeof v === 'string') {
      notifications.show({
        title: 'Warning',
        message: v,
        color: 'warning',
        ...options
      })
    } else {
      notifications.show(v)
    }
  }
  return { success, error, info, warning }
}

export default useNotifications
