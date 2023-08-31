import { FC, FormEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import {
  InitialContextMethodsProps,
  InitialContextProps,
} from '../../shared/types';
import './index.css';

const Login: FC = (): JSX.Element => {
  const navigate = useNavigate();
  const [error, setError] = useState<string>('');
  const [emailAddress, setEmailAddress] = useState<string>('');
  const { email, setIsUserLoggedIn } = useContext<
    InitialContextProps & InitialContextMethodsProps
  >(AppContext);

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email !== emailAddress) {
      setError('Email not found !');
    } else {
      setError('');
      setIsUserLoggedIn(true);
      navigate('/tasks');
    }
  };

  return (
    <div className='login'>
      <h2>Login</h2>
      <form onSubmit={handleOnSubmit}>
        <input
          type='email'
          placeholder='Email'
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
          required
        />
        {!!error.length && <pre style={{ color: 'red' }}>{error}</pre>}
        <button className='submit' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
