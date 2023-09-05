import { createContext } from 'react';
import {
  InitialContextMethodsProps,
  InitialContextProps,
} from '../shared/types';
import DATA from '../shared/data.json';

export const initialState: InitialContextProps & InitialContextMethodsProps = {
  fName: '',
  lName: '',
  email: '',
  isUserLoggedIn: false,
  tasks: DATA,
  setIsUserLoggedIn: () => ({}),
  setDetails: () => ({}),
  AddTask: () => ({}),
  EditTask: () => ({}),
  DeleteTask: () => ({}),
  SortDateAsc: () => ({}),
  SortDateDesc: () => ({}),
};

export const AppContext = createContext(initialState);
