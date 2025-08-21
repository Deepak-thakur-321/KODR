import React, { useState } from 'react'

const AddUsers = () => {

   const [formData, setFormData] = useState({
      name: "",
      email: "",
      age: "",
   })

   const handleChange = (e) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value
      })
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      console.log("User Data:", formData);
      alert("User added successfully!");
      setFormData({ name: "", email: "", age: "" });
   }

   return (
      <div>

         <div className="form-container">
            <form onSubmit={handleSubmit} className="user-form">
               <h2>Add New User</h2>
               <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
               />
               <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
               />
               <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  value={formData.age}
                  onChange={handleChange}
                  required
               />
               <button type="submit" className="submit-btn">Add User</button>
            </form>
         </div>
      </div>
   )
}

export default AddUsers