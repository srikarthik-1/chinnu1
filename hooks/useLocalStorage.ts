

import { useState, useEffect, Dispatch, SetStateAction, useCallback } from 'react';

type SetValue<T> = Dispatch<SetStateAction<T>>;

export function useLocalStorage<T>(key: string, initialValue: T, username: string | null = null): [T, SetValue<T>, () => void] {
  const userKey = username ? `${username}_${key}` : key;
  
  const readValue = useCallback((): T => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(userKey);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key “${userKey}”:`, error);
      return initialValue;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userKey]);

  const [storedValue, setStoredValue] = useState<T>(readValue);

  const setValue: SetValue<T> = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(userKey, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.warn(`Error setting localStorage key “${userKey}”:`, error);
    }
  };

  const clearValue = () => {
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.removeItem(userKey);
        setStoredValue(initialValue);
      }
    } catch (error) {
      console.warn(`Error clearing localStorage key “${userKey}”:`, error);
    }
  }

  useEffect(() => {
    setStoredValue(readValue());
  }, [readValue]);

  return [storedValue, setValue, clearValue];
}