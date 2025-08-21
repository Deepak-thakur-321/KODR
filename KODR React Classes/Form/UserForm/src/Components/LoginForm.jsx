import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { MyStore } from '../Context';

const LoginForm = () => {
   const { setShowLogin } = useContext(MyStore);
   const { register, handleSubmit, formState: { errors }, reset } = useForm();


   const checkLogin = (data) => {
      const users = JSON.parse(localStorage.getItem('registeredUsers')) || [];
      const userFound = users.find(
         (user) => user.email === data.email && user.password === data.password
      );
      reset()

      if (userFound) {
         toast.success('Login Successfully');
      } else {
         toast.error('Login Failed');
      }
   };

   return (
      <div className="min-h-screen flex items-center justify-center bg-blue-100 px-4 py-10">
         <div className="w-full max-w-md">
            <form
               onSubmit={handleSubmit(checkLogin)}
               className="bg-white p-6 rounded-lg shadow space-y-4"
            >
               <h2 className="text-2xl font-bold text-center text-blue-700">Login</h2>

               <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                     Email
                  </label>
                  <input
                     id="email"
                     type="email"
                     placeholder="Enter your email"
                     className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                     {...register('email', { required: 'Email is required' })}
                  />
                  {errors.email && (
                     <p className="text-red-500 mt-1">{errors.email.message}</p>
                  )}
               </div>

               <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                     Password
                  </label>
                  <input
                     id="password"
                     type="password"
                     placeholder="Enter your password"
                     className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                     {...register('password', { required: 'Password is required' })}
                  />
                  {errors.password && (
                     <p className="text-red-500 mt-1">{errors.password.message}</p>
                  )}
               </div>

               <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
               >
                  Login
               </button>

               <p className="text-sm text-center text-gray-600">
                  Don’t have an account?{' '}
                  <span
                     onClick={() => setShowLogin(false)}
                     className="text-blue-600 font-semibold cursor-pointer hover:underline"
                  >
                     Register
                  </span>
               </p>
            </form>
         </div>
      </div>
   );
};

export default LoginForm;
