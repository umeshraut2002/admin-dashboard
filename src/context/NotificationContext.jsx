import { createContext, useCallback, useMemo, useState } from 'react';
import ToastContainer from '../components/ui/ToastContainer';

export const NotificationContext = createContext(null);

let toastId = 0;

export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([]);

  const removeNotification = useCallback((id) => {
    setNotifications((current) => current.filter((notification) => notification.id !== id));
  }, []);

  const notify = useCallback(
    ({ title, message, type = 'info' }) => {
      const id = ++toastId;
      setNotifications((current) => [...current, { id, title, message, type }]);
      window.setTimeout(() => removeNotification(id), 3200);
    },
    [removeNotification],
  );

  const value = useMemo(
    () => ({
      notifications,
      notify,
      removeNotification,
    }),
    [notifications, notify, removeNotification],
  );

  return (
    <NotificationContext.Provider value={value}>
      {children}
      <ToastContainer notifications={notifications} onDismiss={removeNotification} />
    </NotificationContext.Provider>
  );
}
