import { notifications } from '@mantine/notifications';
import {NotificationProps} from "@mantine/core";

const useNotifications = () => {
    const success = (message: string, c?: NotificationProps) => {
        notifications.show({
            title: 'Success',
            message,
            color: 'primary',
            ...c,
        });
    };
    const error = (message: string, c?: NotificationProps) => {
        notifications.show({
            title: 'Error',
            message,
            color: 'danger',
            ...c,
        });
    };
    const info = (message: string, c?: NotificationProps) => {
        notifications.show({
            title: 'Info',
            message,
            color: 'info',
            ...c,
        });
    };

    const warning = (message: string, c?: NotificationProps) => {
        notifications.show({
            title: 'Warning',
            message,
            color: 'warning',
            ...c,
        });
    };
    return { success, error, info, warning };
};

export default useNotifications;
