import React, { createContext, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {

   const [users, setUsers] = useState([]);
   const [count, setCount] = useState(0);

   const handleDelete = (id) => {
      const updatedUsers = users.filter((user) => user.id !== id)
      setUsers(updatedUsers)
   }

   return (
      <MyContext.Provider value={{ users, setUsers, count, setCount, handleDelete, }}>
         {children}
      </MyContext.Provider>
   );
};
