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
    emailAddress,
  }: {
    fName: string;
    lName: string;
    emailAddress: string;
  }) => void;
  AddTask: (task: TaskProp) => void;
  EditTask: (task: TaskProp) => void;
  DeleteTask: (id: number) => void;
  SortDateAsc: () => void;
  SortDateDesc: () => void;
};

export type InitialContextProps = {
  firstName: string;
  lastName: string;
  email: string;
  isUserLoggedIn: boolean;
  tasks: TaskProp[];
};
