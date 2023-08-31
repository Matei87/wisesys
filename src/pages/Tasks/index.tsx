import { FC, FormEvent, useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../../state';
import Task from './Task';
import './index.css';
import { TaskProp } from '../../shared/types';
import { formatedDate } from '../../shared/utilities';

const Tasks: FC = () => {
  const { tasks, AddTask, SortDateAsc, SortDateDesc } = useContext(AppContext);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [searchTitle, setSearchTitle] = useState<string>('');

  const handleSort = () => {
    setIsClicked(!isClicked);
    if (isClicked) {
      SortDateAsc();
    } else if (!isClicked) {
      SortDateDesc();
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    AddTask({
      id: tasks.length + 1,
      title,
      description,
      date: `${formatedDate}`,
    });
    setTitle('');
    setDescription('');
  };

  const filteredArr = tasks.filter((task: TaskProp) => {
    const regex = new RegExp(`${searchTitle}`, 'gi');
    return task.title.match(regex);
  });

  console.log(tasks, title, description, searchTitle, filteredArr);

  return (
    <div className='tasks'>
      <h2>Task list</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={title}
          placeholder='Title'
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type='text'
          value={description}
          placeholder='Description'
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type='submit' className='submit submitTask'>
          Add
        </button>
      </form>

      <input
        type='text'
        placeholder='Search title'
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
        className='searchTitle'
      />

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
          {searchTitle.length > 0
            ? filteredArr.map((task: TaskProp) => (
                <Task key={task.id} {...task} />
              ))
            : tasks.map((task: TaskProp) => <Task key={task.id} {...task} />)}
        </tbody>
      </table>
    </div>
  );
};

export default Tasks;
