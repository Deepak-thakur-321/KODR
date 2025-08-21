import React, { useContext, useState } from 'react';
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MyStore } from './Context';

const App = () => {

  const { showLogin, setShowLogin } = useContext(MyStore)

  return (
    <div>
      {showLogin ? (
        <LoginForm setShowLogin={setShowLogin} />
      ) : (
        <RegisterForm setShowLogin={setShowLogin} />
      )}

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default App;
