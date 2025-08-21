import React from "react";
import { useForm } from "react-hook-form";

const ReactHookForm = () => {

   const { register, handleSubmit, formState: { errors }, } = useForm()


   return (
      <div>
         <form onSubmit={handleSubmit((data) => console.log(data))}>

            <input {...register("name", { required: true })} type="text" name="name" placeholder="Enter name" /> <br />
            {errors.name && <p>Please enter name</p>} <br />

            <input {...register("email", { required: true })} type="email" name="email" placeholder="Enter email" />
            {errors.email && <p>Please enter email</p>} <br /><br />

            <button type="submit">Submit</button>
         </form>
      </div>
   );
};

export default ReactHookForm;
