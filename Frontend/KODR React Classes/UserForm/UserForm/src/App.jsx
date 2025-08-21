import React, { useContext } from "react";
import RegisterForm from "./Components/RegisterForm";
import LoginForm from "./Components/LoginForm";
import { MyStore } from "./Context";

const App = () => {
  const { showLogin } = useContext(MyStore);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-200 flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        {showLogin ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
};

export default App;
