import { SWRConfiguration } from 'swr'
import useNotifications from '@/hooks/use-notifications'

const swrConfig: SWRConfiguration = {
  onError: (err, key) => {
    const notifications = useNotifications()
    if (err?.response?.data?.message) {
      notifications.error(err?.response?.data?.message)
    }
  }
}

export default swrConfig
