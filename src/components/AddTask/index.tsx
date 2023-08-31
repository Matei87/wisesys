import { FC, FormEvent, useContext, useState } from 'react';
import { formatedDate } from '../../shared/utilities';
import {
  InitialContextMethodsProps,
  InitialContextProps,
} from '../../shared/types';
import { AppContext } from '../../context/AppContext';
import './index.css';

const AddTask: FC = (): JSX.Element => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const { tasks, AddTask } = useContext<
    InitialContextProps & InitialContextMethodsProps
  >(AppContext);

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

  return (
    <form onSubmit={handleSubmit} className='addTaskForm'>
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
      <button type='submit' className='submit'>
        Add
      </button>
    </form>
  );
};

export default AddTask;
