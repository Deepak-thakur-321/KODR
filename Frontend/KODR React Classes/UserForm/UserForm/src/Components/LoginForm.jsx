import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { MyStore } from "../Context";

const LoginForm = () => {
   const { register, handleSubmit, reset, formState: { errors } } = useForm();
   const { setShowLogin } = useContext(MyStore);

   const onSubmit = () => {
      toast.success("Logged in successfully!");
      reset();
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-lg space-y-4">
         <ToastContainer />
         <h2 className="text-2xl font-bold text-center text-purple-700">Login</h2>

         <input
            {...register("email", { required: "Email required" })}
            placeholder="Email"
            className="w-full p-2 border rounded"
         />
         {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

         <input
            {...register("password", { required: "Password required" })}
            placeholder="Password"
            type="password"
            className="w-full p-2 border rounded"
         />
         {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

         <button type="submit" className="bg-purple-600 text-white w-full py-2 rounded hover:bg-purple-700">
            Login
         </button>

         <p className="text-sm text-center text-gray-600">
            Don't have an account?{" "}
            <span onClick={() => setShowLogin(false)} className="text-purple-700 font-semibold cursor-pointer">
               Register here
            </span>
         </p>
      </form>
   );
};

export default LoginForm;
