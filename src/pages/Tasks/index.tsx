import { FC, useState } from 'react';
import AddTask from '../../components/AddTask';
import SearchTask from '../../components/SearchTask';
import Table from '../../components/Table';

const Tasks: FC = (): JSX.Element => {
  const [searchTitle, setSearchTitle] = useState<string>('');

  return (
    <div className='tasks'>
      <h2>Task list</h2>

      <AddTask />
      <SearchTask searchTitle={searchTitle} setSearchTitle={setSearchTitle} />
      <Table searchTitle={searchTitle} />
    </div>
  );
};

export default Tasks;
