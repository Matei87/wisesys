import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import Tasks from './pages/Tasks';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App: FC = () => {
  return (
    <>
      <Navbar />
      <div className='app'>
        <Routes>
          <Route path='/' element={<div>This is Homepage !!!</div>} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/tasks' element={<Tasks />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
