import { FC, FormEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import './index.css';
import { AppContext } from '../../state';

const Register: FC = () => {
  const navigate = useNavigate();
  const [fName, setFName] = useState<string>('');
  const [lName, setLName] = useState<string>('');
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [error, setError] = useState<string>('');
  const { email, firstName, lastName, setDetails } = useContext(AppContext);

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    const regex = /\S+@\S+\.\S+/;
    if (!regex.test(emailAddress)) {
      setError('Please enter a valid email address!');
    } else {
      console.log('inside handle ', fName, lName, emailAddress);

      setError('');
      setDetails({ fName, lName, emailAddress });

      setFName('');
      setLName('');
      setEmailAddress('');
      navigate('/login');
    }
  };
  console.log('Register ', firstName, lastName, email);
  console.log('Register2 ', fName, lName, emailAddress);

  return (
    <div className='login'>
      <h2>Register</h2>
      <form onSubmit={handleOnSubmit}>
        <input
          type='text'
          value={fName}
          name='fName'
          placeholder='First Name'
          onChange={(e) => setFName(e.target.value)}
          required
        />
        <input
          type='text'
          value={lName}
          name='lName'
          placeholder='Last Name'
          onChange={(e) => setLName(e.target.value)}
          required
        />
        <input
          type='email'
          value={emailAddress}
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
      {firstName} {lastName} {email}
    </div>
  );
};

export default Register;
