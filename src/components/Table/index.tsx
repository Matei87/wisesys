import { FC, useContext, useState } from 'react';
import {
  InitialContextMethodsProps,
  InitialContextProps,
  SearchTitleProps,
  TaskProp,
} from '../../shared/types';
import { AppContext } from '../../context/AppContext';
import Task from '../Task';
import './index.css';

const Table: FC<SearchTitleProps> = ({
  searchTitle,
}: SearchTitleProps): JSX.Element => {
  const { tasks, SortDateAsc, SortDateDesc } = useContext<
    InitialContextProps & InitialContextMethodsProps
  >(AppContext);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleSort = () => {
    setIsClicked(!isClicked);
    if (isClicked) {
      SortDateAsc();
    } else if (!isClicked) {
      SortDateDesc();
    }
  };

  const filteredArr = tasks.filter((task: TaskProp) => {
    const regex = new RegExp(`${searchTitle}`, 'gi');
    return task.title.match(regex);
  });

  const tasksArray = searchTitle.length > 0 ? filteredArr : tasks;

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>
            Date
            <i
              className={`fa fa-arrow-${isClicked ? 'down' : 'up'}`}
              style={{ marginLeft: '7px' }}
              onClick={handleSort}
            />
          </th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasksArray.map((task: TaskProp) => (
          <Task key={task.id} {...task} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
