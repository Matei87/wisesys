import { FC, useContext, useState } from 'react';
import { TaskProp } from '../../shared/types';
import { AppContext } from '../../state';
import { formatedDate } from '../../shared/utilities';

const Task: FC<TaskProp> = ({ id, title, description, date }: TaskProp) => {
  const { EditTask, DeleteTask } = useContext(AppContext);
  const [editId, setEditId] = useState<number>(-1);
  const [editTitle, setEditTitle] = useState<string>(title);
  const [editDescription, setEditDescription] = useState<string>(description);

  const handleUpdate = () => {
    EditTask({
      id: editId,
      title: editTitle,
      description: editDescription,
      date: `${formatedDate}`,
    });
    setEditId(-1);
  };

  return (
    <tr>
      {id === editId ? (
        <>
          <td>
            <input
              type='text'
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
          </td>
          <td>
            <input
              type='text'
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
            />
          </td>
          <td>
            <input type='text' value={date} readOnly />
          </td>
          <td>
            <button type='button' className='edit' onClick={handleUpdate}>
              Save
            </button>
          </td>
        </>
      ) : (
        <>
          <td>{title}</td>
          <td>{description}</td>
          <td>{date}</td>

          <td className='buttons'>
            <button
              className='edit'
              type='button'
              onClick={() => setEditId(id)}
            >
              Edit
            </button>
            <button
              className='delete'
              type='button'
              onClick={() => DeleteTask(id)}
            >
              Delete
            </button>
          </td>
        </>
      )}
    </tr>
  );
};

export default Task;
