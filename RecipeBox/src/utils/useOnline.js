import { useEffect, useState } from 'react';

export function useOnline() {
  const [isOnline, setIsOnline] = useState(true);

  function handleOnline() {
    setIsOnline(true);
  }

  function handleOffline() {
    setIsOnline(true);
  }

  useEffect(() => {
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      document.removeEventListener('online', handleOnline);
      document.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
}
