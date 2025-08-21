import React, { useContext } from "react";
import axios from "axios";
import { MyContext } from "../Context/UserContext";
import UserCard from "../Components/UserCard";
import { useQuery } from "@tanstack/react-query";

const Users = () => {
   const { setUsers, count, setCount } = useContext(MyContext);

   const fetchUsers = async () => {
      const res = await axios.get("https://dummyjson.com/users");
      return res.data.users;
   };


   const { data, isLoading, isError, error } = useQuery({
      queryKey: ["users"],
      queryFn: fetchUsers,
      onSuccess: (data) => {
         setUsers(data);
      },
      staleTime: Infinity
   });
   console.log(data);


   if (isLoading) return <p>Loading...</p>;
   if (isError) return <p>Error: {error.message}</p>;

   return (
      <div>
         <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1, console.log("rendered"))}>Increment</button>
         </div>
         {data.map((val) =>
            < UserCard key={val.id} val={val} />
         )}
      </div>
   );
};

export default React.memo(Users);
