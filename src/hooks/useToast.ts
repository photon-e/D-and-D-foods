import { useCallback, useState } from 'react';

export function useToast() {
  const [message, setMessage] = useState('');

  const toast = useCallback((nextMessage: string) => {
    setMessage(nextMessage);
    window.setTimeout(() => setMessage(''), 3500);
  }, []);

  return { message, toast, clear: () => setMessage('') };
}
