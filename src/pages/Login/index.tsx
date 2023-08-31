import { FC, FormEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import { AppContext } from '../../state';

const Login: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string>('');
  const [emailAddress, setEmailAddress] = useState<string>('');
  const { email, setIsUserLoggedIn } = useContext(AppContext);

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
  console.log(email);

  return (
    <div className='login'>
      <h2>Login</h2>
      <form onSubmit={handleOnSubmit}>
        <input
          type='email'
          name='emailAddress'
          placeholder='Email'
          onChange={(e) => setEmailAddress(e.target.value)}
          required
        />
        {!!error.length && <pre style={{ color: 'red' }}>{error}</pre>}
        <button className='submit' type='submit'>
          Submit
        </button>
      </form>
      {email}
    </div>
  );
};

export default Login;
