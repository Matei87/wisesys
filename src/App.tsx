import { FC, useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Tasks from './pages/Tasks';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Register from './pages/Register';
import {
  InitialContextProps,
  InitialContextMethodsProps,
} from './shared/types';
import { AppContext } from './context/AppContext';

const App: FC = (): JSX.Element => {
  const { isUserLoggedIn } = useContext<
    InitialContextProps & InitialContextMethodsProps
  >(AppContext);

  return (
    <>
      <Navbar />
      <div className='app'>
        <Routes>
          <Route path='/' element={<h2>Homepage </h2>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route
            path='/tasks'
            element={isUserLoggedIn ? <Tasks /> : <Navigate to='/' />}
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
