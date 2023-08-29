import { FC, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import { AppContext } from '../../state';

const LoginPage: FC = () => {
  const navigate = useNavigate();
  const [fName, setFName] = useState<string | ''>('');
  const [LName, setLName] = useState<string | ''>('');
  const [emailAddress, setEmailAddress] = useState<string | ''>('');
  const { email, firstName, lastName, setFirstName, setLastName, setEmail } =
    useContext(AppContext);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    fName && setFirstName(fName);
    LName && setLastName(LName);
    emailAddress && setEmail(emailAddress);
    //navigate('/tasks');
  };
  console.log(firstName, lastName, email);

  return (
    <div className='login'>
      <h2>Login</h2>
      <form onSubmit={handleOnSubmit}>
        <input
          type='text'
          name='fName'
          placeholder='First Name'
          onChange={(e) => setFName(e.target.value)}
          required
        />
        <input
          type='text'
          name='LName'
          placeholder='Last Name'
          onChange={(e) => setLName(e.target.value)}
          required
        />
        <input
          type='email'
          name='emailAddress'
          placeholder='Email'
          onChange={(e) => setEmailAddress(e.target.value)}
          required
        />
        <button className='submit' type='submit'>
          Submit
        </button>
      </form>
      {firstName} {lastName} {email}
    </div>
  );
};

export default LoginPage;
