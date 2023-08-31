import { Dispatch, SetStateAction } from 'react';

export type TaskProp = {
  id: number;
  title: string;
  description: string;
  date: string;
};

export type InitialContextMethodsProps = {
  setIsUserLoggedIn: (isUserLoggedIn: boolean) => void;
  setDetails: ({
    fName,
    lName,
    email,
  }: {
    fName: string;
    lName: string;
    email: string;
  }) => void;
  AddTask: (task: TaskProp) => void;
  EditTask: (task: TaskProp) => void;
  DeleteTask: (id: number) => void;
  SortDateAsc: () => void;
  SortDateDesc: () => void;
};

export type InitialContextProps = {
  fName: string;
  lName: string;
  email: string;
  isUserLoggedIn: boolean;
  tasks: TaskProp[];
};

export type SearchTitleProps = {
  searchTitle: string;
};

export type SetSearchTitleProps = SearchTitleProps & {
  setSearchTitle: Dispatch<SetStateAction<string>>;
};
