import { createContext } from 'react';
import {
  InitialContextMethodsProps,
  InitialContextProps,
  TaskProp,
} from '../shared/types';
import DATA from '../shared/data.json';

export const initialState: InitialContextProps & InitialContextMethodsProps = {
  fName: '',
  lName: '',
  email: '',
  isUserLoggedIn: false,
  tasks: DATA,
  setIsUserLoggedIn: (isUserLoggedIn: boolean) => ({
    ...initialState,
    isUserLoggedIn,
  }),
  setDetails: ({
    fName,
    lName,
    email,
  }: {
    fName: string;
    lName: string;
    email: string;
  }) => ({
    ...initialState,
    fName,
    lName,
    email,
  }),
  AddTask: (task: TaskProp) => ({
    ...initialState,
    tasks: [...initialState.tasks, task],
  }),
  EditTask: (task: TaskProp) => ({
    ...initialState,
    tasks: initialState.tasks.map((data) =>
      data.id === task.id ? task : data
    ),
  }),
  DeleteTask: (id: number) => ({
    ...initialState,
    tasks: initialState.tasks.filter((task) => task.id !== id),
  }),
  SortDateAsc: () => ({
    ...initialState,
    tasks: initialState.tasks.sort(
      (taskA, taskB) => +new Date(taskA.date) - +new Date(taskB.date)
    ),
  }),
  SortDateDesc: () => ({
    ...initialState,
    tasks: initialState.tasks.sort(
      (taskA, taskB) => +new Date(taskB.date) - +new Date(taskA.date)
    ),
  }),
};

export const AppContext = createContext(initialState);
