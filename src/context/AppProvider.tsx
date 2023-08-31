import { ReactNode, useEffect, useState } from 'react';
import { TaskProp } from '../shared/types';
import { AppContext, initialState } from './AppContext';
import { getLocalStorage, setLocalStorage } from '../shared/utilities';

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
        fName: initialStorageState.fName,
        lName: initialStorageState.lName,
        email: initialStorageState.email,
        isUserLoggedIn: initialStorageState.isUserLoggedIn,
        setIsUserLoggedIn: (isUserLoggedIn: boolean) =>
          setInitialStorageState({ ...initialStorageState, isUserLoggedIn }),
        setDetails: ({
          fName,
          lName,
          email,
        }: {
          fName: string;
          lName: string;
          email: string;
        }) =>
          setInitialStorageState({
            ...initialStorageState,
            fName,
            lName,
            email,
          }),
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
