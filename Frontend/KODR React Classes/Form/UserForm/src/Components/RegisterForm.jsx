import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { MyStore } from '../Context';

const RegisterForm = ({ setShowLogin }) => {

   const { register, handleSubmit, formState: { errors }, reset } = useForm();

   const { registeredUsers, setRegisteredUsers } = useContext(MyStore)

   const formHandler = (data) => {
      const updatedUsers = [...registeredUsers, data];
      localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));
      setRegisteredUsers(updatedUsers);
      toast.success('Registered successfully!');
      reset();
      setShowLogin(false)
   };

   return (
      <div className="bg-blue-300 min-h-screen p-10 flex flex-col items-center">
         <form
            onSubmit={handleSubmit(formHandler)}
            className="max-w-md w-full bg-white p-8 rounded-lg shadow-md space-y-6"
         >
            <h2 className="text-2xl font-bold text-center mb-4">Register</h2>

            <div>
               <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
               <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register('name', { required: 'Name is required' })}
               />
               {errors.name && <p className="text-red-500 mt-2">{errors.name.message}</p>}
            </div>

            <div>
               <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
               <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register('email', { required: 'Email is required' })}
               />
               {errors.email && <p className="text-red-500 mt-2">{errors.email.message}</p>}
            </div>

            <div>
               <label htmlFor="password" className="block text-gray-700 mb-1">Password</label>
               <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register('password', { required: 'Password is required' })}
               />
               {errors.password && <p className="text-red-500 mt-2">{errors.password.message}</p>}
            </div>

            <div>
               <label htmlFor="contact" className="block text-gray-700 mb-1">Contact</label>
               <input
                  id="contact"
                  type="tel"
                  placeholder="Enter your contact number"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register('contact', { required: 'Contact is required' })}
               />
               {errors.contact && <p className="text-red-500 mt-2">{errors.contact.message}</p>}
            </div>

            <button
               type="submit"
               className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
               Register
            </button>

            <p className="text-center text-gray-600">
               Already have an account?
               <span
                  onClick={() => setShowLogin(true)}
                  className="text-blue-600 hover:underline cursor-pointer ml-1"
               >
                  Login
               </span>
            </p>
         </form>

         {registeredUsers.length > 0 && (
            <div className="mt-10 px-4 max-w-7xl mx-auto">
               <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Registered Users</h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {registeredUsers.map((user, idx) => (
                     <div
                        key={idx}
                        className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 p-6 relative"
                     >
                        <div className="absolute top-2 right-2 text-sm text-gray-400 font-medium">#{idx + 1}</div>
                        <div className="flex items-center gap-4 mb-4">
                           <div className="h-14 w-14 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xl font-bold">
                              {user.name?.[0]?.toUpperCase() || "U"}
                           </div>
                           <div>
                              <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
                              <p className="text-sm text-gray-500">{user.email}</p>
                           </div>
                        </div>
                        <div className="text-gray-700 space-y-2">
                           <p><span className="font-medium">Email:</span> {user.email}</p>
                           <p><span className="font-medium">Contact:</span> {user.contact}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         )}

      </div>
   );
};

export default RegisterForm;
