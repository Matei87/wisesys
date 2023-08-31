import { InitialContextProps } from './types';

const formatDate = new Intl.DateTimeFormat('en-CA', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
});
export const formatedDate = formatDate.format(new Date()).replace(',', '');

export const setLocalStorage = (key: string, value: InitialContextProps) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (
  key: string,
  initialValue: InitialContextProps
) => {
  const value = window.localStorage.getItem(key);
  return value ? JSON.parse(value) : initialValue;
};
