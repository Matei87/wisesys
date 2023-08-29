import { FC } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Navbar: FC = () => {
  return (
    <nav>
      <div>
        <Link to='/'>Homepage</Link>
      </div>

      <ul className='navList'>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/tasks'>Tasks</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
