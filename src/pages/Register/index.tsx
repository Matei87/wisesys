import { FC, FormEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import {
  InitialContextMethodsProps,
  InitialContextProps,
} from '../../shared/types';

const Register: FC = (): JSX.Element => {
  const navigate = useNavigate();
  const [fName, setFName] = useState<string>('');
  const [lName, setLName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');
  const { setDetails } = useContext<
    InitialContextProps & InitialContextMethodsProps
  >(AppContext);

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    const regex = /\S+@\S+\.\S+/;
    if (!regex.test(email)) {
      setError('Please enter a valid email address!');
    } else {
      setError('');
      setDetails({ fName, lName, email });
      setFName('');
      setLName('');
      setEmail('');
      navigate('/login');
    }
  };

  return (
    <div className='register'>
      <h2>Register</h2>
      <form onSubmit={handleOnSubmit}>
        <input
          type='text'
          value={fName}
          placeholder='First Name'
          onChange={(e) => setFName(e.target.value)}
          required
        />
        <input
          type='text'
          value={lName}
          placeholder='Last Name'
          onChange={(e) => setLName(e.target.value)}
          required
        />
        <input
          type='email'
          value={email}
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
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

export default Register;
