import { ReactNode, createContext, useEffect, useState } from 'react';
import DATA from '../shared/data.json';
import {
  InitialContextMethodsProps,
  InitialContextProps,
  TaskProp,
} from '../shared/types';

const setLocalStorage = (key: string, value: InitialContextProps) => {
  console.log('setlocalstorage ', key, value);
  window.localStorage.setItem(key, JSON.stringify(value));
};

const getLocalStorage = (key: string, initialValue: InitialContextProps) => {
  const value = window.localStorage.getItem(key);
  return value ? JSON.parse(value) : initialValue;
};

const initialState: InitialContextProps & InitialContextMethodsProps = {
  firstName: '',
  lastName: '',
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
    emailAddress,
  }: {
    fName: string;
    lName: string;
    emailAddress: string;
  }) => ({
    ...initialState,
    firstName: fName,
    lastName: lName,
    email: emailAddress,
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

export const AppProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [initialStorageState, setInitialStorageState] = useState(() =>
    getLocalStorage('initialState', initialState)
  );

  useEffect(() => {
    setLocalStorage('initialState', initialStorageState);
  }, [initialStorageState]);

  return (
    <AppContext.Provider
      value={{
        tasks: initialStorageState.tasks,
        firstName: initialStorageState.firstName,
        lastName: initialStorageState.lastName,
        email: initialStorageState.email,
        isUserLoggedIn: initialStorageState.isUserLoggedIn,
        setIsUserLoggedIn: (isUserLoggedIn: boolean) => {
          console.log('initialisuserloggedin ', isUserLoggedIn);
          setInitialStorageState({ ...initialStorageState, isUserLoggedIn });
        },
        setDetails: ({
          fName,
          lName,
          emailAddress,
        }: {
          fName: string;
          lName: string;
          emailAddress: string;
        }) => {
          console.log('initialemail ', fName, lName, emailAddress);
          setInitialStorageState({
            ...initialStorageState,
            firstName: fName,
            lastName: lName,
            email: emailAddress,
          });
        },
        AddTask: (task: TaskProp) =>
          setInitialStorageState({
            ...initialStorageState,
            tasks: [...initialStorageState.tasks, task],
          }),
        EditTask: (task: TaskProp) =>
          setInitialStorageState({
            ...initialStorageState,
            tasks: initialStorageState.tasks.map((data: TaskProp) =>
              data.id === task.id ? task : data
            ),
          }),
        DeleteTask: (id: number) =>
          setInitialStorageState({
            ...initialStorageState,
            tasks: initialStorageState.tasks.filter(
              (task: TaskProp) => task.id !== id
            ),
          }),
        SortDateAsc: () =>
          setInitialStorageState({
            ...initialStorageState,
            tasks: initialStorageState.tasks.sort(
              (taskA: TaskProp, taskB: TaskProp) =>
                +new Date(taskA.date) - +new Date(taskB.date)
            ),
          }),
        SortDateDesc: () =>
          setInitialStorageState({
            ...initialStorageState,
            tasks: initialStorageState.tasks.sort(
              (taskA: TaskProp, taskB: TaskProp) =>
                +new Date(taskB.date) - +new Date(taskA.date)
            ),
          }),
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
