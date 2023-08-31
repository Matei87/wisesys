import { FC, useContext, useState } from 'react';
import {
  InitialContextMethodsProps,
  InitialContextProps,
  TaskProp,
} from '../../shared/types';
import { AppContext } from '../../context/AppContext';
import { formatedDate } from '../../shared/utilities';

const Task: FC<TaskProp> = ({
  id,
  title,
  description,
  date,
}: TaskProp): JSX.Element => {
  const { EditTask, DeleteTask } = useContext<
    InitialContextProps & InitialContextMethodsProps
  >(AppContext);
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
              className='editableInput'
            />
          </td>
          <td>
            <input
              type='text'
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
              className='editableInput'
            />
          </td>
          <td>
            <input type='text' value={date} className='readInput' readOnly />
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
