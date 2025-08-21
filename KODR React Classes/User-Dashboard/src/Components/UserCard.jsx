import React, { useContext } from 'react'
import { MyContext } from '../Context/UserContext'

const UserCard = ({ val }) => {

   const { handleDelete} = useContext(MyContext)

   return (
      <div>
         <div className="user-container">
            
            <div className="user-card" key={val.id}>
               <img src={val.image} alt={val.name?.firstName} className="user-img" />cl
               <h3>{val.name?.firstName} {val.name?.lastName}</h3>
               <p>{val.email}</p>
               <p className="user-age">Age: {val.age}</p>
               <button onClick={() => handleDelete(val.id)}>Delete</button>
            </div>

         </div>

      </div>
   )
}

export default UserCard