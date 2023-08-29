import { FC, Fragment } from 'react';
import { useContext } from 'react';
import { AppContext, DataProp } from '../../state';
import './index.css';

const Tasks: FC = () => {
  const { tasks } = useContext(AppContext);

  console.log(tasks.data);

  return (
    <div className='tasks'>
      <h2>Task list</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.data.map((task: DataProp) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.date}</td>

              <td className='buttons'>
                <button
                  className='edit'
                  type='button'
                  onClick={() => {
                    console.log('edit ', task.id);
                  }}
                >
                  Edit
                </button>
                <button
                  className='delete'
                  type='button'
                  onClick={() => {
                    console.log('delete ', task.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tasks;
