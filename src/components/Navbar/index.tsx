import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import {
  InitialContextMethodsProps,
  InitialContextProps,
} from '../../shared/types';
import './index.css';

const Navbar: FC = (): JSX.Element => {
  const { email, isUserLoggedIn } = useContext<
    InitialContextProps & InitialContextMethodsProps
  >(AppContext);

  return (
    <nav>
      <div>
        <Link to='/'>Homepage</Link>
      </div>

      <ul className='navList'>
        {isUserLoggedIn ? (
          <li>{`Hi, ${email}`}</li>
        ) : (
          <li>
            <Link to='/register'>Register</Link>
          </li>
        )}
        {!isUserLoggedIn && (
          <li>
            <Link to='/login'>Login</Link>
          </li>
        )}
        {isUserLoggedIn && (
          <li>
            <Link to='/tasks'>Tasks</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
