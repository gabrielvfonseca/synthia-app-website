"use client"

import { useEffect } from 'react';
import { useLocalStorage } from './utils/use-localstorage';

export const useTheme = (): [string, () => void] => {
  const [theme, setTheme] = useLocalStorage<string>('theme', 'system');

  const toggleTheme = () => {
    switch (theme) {
      case 'light':
        setTheme('dark');
        break;
      case 'dark':
        setTheme('system');
        break;
      default:
        setTheme('light');
        break;
    }
  };

  useEffect(() => {
    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    const listener = () => {
      if (theme === 'system') {
        setTheme(mediaQueryList.matches ? 'dark' : 'light');
      }
    };
    mediaQueryList.addEventListener('change', listener);
    return () => mediaQueryList.removeEventListener('change', listener);
  }, [theme, setTheme]);

  useEffect(() => {
    const html = document.querySelector('html');
    if (html) {
      if (theme === 'dark') {
        html.classList.add('media');
      } else {
        html.classList.remove('media');
      }
    }
  }, [theme]);

  useEffect(() => {
    if (theme === 'system') {
      const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
      setTheme(mediaQueryList.matches ? 'dark' : 'light');
    }
  }, []);

  return [theme, toggleTheme];
};
