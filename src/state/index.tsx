import { FC, ReactNode, createContext, useState } from 'react';
import DATA from '../shared/data.json';

export type DataProp = {
  id: number;
  title: string;
  description: string;
  date: string;
};

export type TaskProp = {
  data: DataProp[];
};

type InitialContextProps = {
  firstName: string;
  lastName: string;
  email: string;
  tasks: TaskProp;
};

export const AppContext = createContext<InitialContextProps | null>(null);

export const AppProvider: FC<ReactNode> = (props) => {
  const initialState: InitialContextProps = {
    firstName: '',
    lastName: '',
    email: '',
    //tasks: { data: [] },
    tasks: DATA,
  };
  const [tasks, setTasks] = useState<TaskProp>(initialState.tasks);
  const [firstName, setFirstName] = useState<string | ''>(
    initialState.firstName
  );
  const [lastName, setLastName] = useState<string | ''>(initialState.lastName);
  const [email, setEmail] = useState<string | ''>(initialState.email);

  const addNewTask = (task: DataProp) => {
    const newTask: DataProp = {
      id: DATA['data'].length + 1,
      title: task.title,
      description: task.description,
      date: String(new Date()),
    };
    setTasks((prev) => ({ ...prev, newTask }));
  };
  const updateTask = (task) => {
    // tasks.filter((task: DataProp) => {
    //   if (task.id === id) {
    //     task.data = new Date();
    //     setTasks([...DataProp]);
    //   }
    // });
  };
  const sortDataTask = () => {
    return tasks.data.sort((a, b) => new Date(b.date) - new Date(a.date));
  };

  return (
    <AppContext.Provider
      value={{
        tasks,
        addNewTask,
        updateTask,
        sortDataTask,
        firstName,
        lastName,
        email,
        setFirstName,
        setLastName,
        setEmail,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
