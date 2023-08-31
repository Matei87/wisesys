import { FC, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Tasks from './pages/Tasks';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Register from './pages/Register';
import { AppContext } from './state';
import {
  InitialContextProps,
  InitialContextMethodsProps,
} from './shared/types';

const App: FC = () => {
  const { isUserLoggedIn } = useContext<
    InitialContextProps & InitialContextMethodsProps
  >(AppContext);
  console.log('app ', isUserLoggedIn);

  return (
    <>
      <Navbar />
      <div className='app'>
        <Routes>
          <Route path='/' element={<div>This is Homepage !!!</div>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          {isUserLoggedIn && <Route path='/tasks' element={<Tasks />} />}
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
