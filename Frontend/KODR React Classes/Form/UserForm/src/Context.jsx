import { createContext, useState } from "react";

export const MyStore = createContext();

const MyStoreProvider = ({ children }) => {

   const [showLogin, setShowLogin] = useState(false);
   
   const [registeredUsers, setRegisteredUsers] = useState(() => {
      return JSON.parse(localStorage.getItem('registeredUsers')) || [];
   });

   return (
      <MyStore.Provider value={{ showLogin, setShowLogin, registeredUsers, setRegisteredUsers }}>
         {children}
      </MyStore.Provider>
   );
};

export default MyStoreProvider;
