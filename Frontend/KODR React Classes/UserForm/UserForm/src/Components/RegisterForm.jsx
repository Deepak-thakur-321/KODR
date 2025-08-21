import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { MyStore } from "../Context";
// import "react-toastify/dist/ReactToastify.css";

const RegisterForm = () => {
   const { register, handleSubmit, reset, formState: { errors } } = useForm();
   const { addUser, submittedUsers, setShowLogin } = useContext(MyStore);

   const onSubmit = (data) => {
      addUser(data);
      toast.success("Registration Successful!");
      reset();
   };

   const getInitials = (name) => {
      return name
         .split(" ")
         .map((word) => word[0])
         .join("")
         .toUpperCase();
   };

   return (
      <div className="space-y-6">
         <ToastContainer />
         <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-lg space-y-4">
            <h2 className="text-2xl font-bold text-center text-blue-600">Register</h2>

            <input
               {...register("fullName", { required: "Full name required" })}
               placeholder="Full Name"
               className="w-full p-2 border rounded"
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}

            <input
               {...register("email", {
                  required: "Email required",
                  pattern: {
                     value: /^\S+@\S+$/i,
                     message: "Invalid email",
                  },
               })}
               placeholder="Email"
               className="w-full p-2 border rounded"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

            <input
               {...register("password", {
                  required: "Password required",
                  minLength: { value: 6, message: "At least 6 characters" },
               })}
               placeholder="Password"
               type="password"
               className="w-full p-2 border rounded"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

            <input
               {...register("mobile", {
                  required: "Mobile required",
                  pattern: {
                     value: /^[0-9]{10}$/,
                     message: "Invalid mobile number",
                  },
               })}
               placeholder="Mobile"
               className="w-full p-2 border rounded"
            />
            {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile.message}</p>}

            <button type="submit" className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600">
               Register
            </button>

            <p className="text-sm text-center text-gray-600">
               Already have an account?{" "}
               <span onClick={() => setShowLogin(true)} className="text-blue-700 font-semibold cursor-pointer">
                  Login here
               </span>
            </p>
         </form>

         {/* User Cards */}
         {submittedUsers.length > 0 && (
            <div className="space-y-3">
               {submittedUsers.map((user, index) => (
                  <div key={index} className="p-4 bg-white rounded shadow flex items-center gap-4">
                     <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center">
                        {getInitials(user.fullName)}
                     </div>
                     <div>
                        <div className="font-bold">{user.fullName}</div>
                        <div className="text-sm text-gray-600">{user.email}</div>
                        <div className="text-sm text-gray-600">{user.mobile}</div>
                     </div>
                  </div>
               ))}
            </div>
         )}
      </div>
   );
};

export default RegisterForm;
