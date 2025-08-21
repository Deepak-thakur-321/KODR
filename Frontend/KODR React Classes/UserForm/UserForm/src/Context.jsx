import { createContext, useState } from "react";

export const MyStore = createContext();

export const MyStoreProvider = ({ children }) => {
   
   const localData = localStorage.getItem("submittedUsers");
   const initialUsers = localData ? JSON.parse(localData) : [];

   const [submittedUsers, setSubmittedUsers] = useState(initialUsers);
   const [showLogin, setShowLogin] = useState(false);

   const addUser = (user) => {
      const updatedUsers = [...submittedUsers, user];
      setSubmittedUsers(updatedUsers);
      localStorage.setItem("submittedUsers", JSON.stringify(updatedUsers));
   };

   return (
      <MyStore.Provider
         value={{
            submittedUsers,
            addUser,
            showLogin,
            setShowLogin,
         }}
      >
         {children}
      </MyStore.Provider>
   );
};
