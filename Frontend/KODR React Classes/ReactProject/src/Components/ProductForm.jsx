import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';

const ProductForm = ({ formData, setFormData }) => {
   const { register, handleSubmit, formState: { errors }, reset } = useForm();

   const onSubmitForm = (data) => {
      const updatedProducts = [...formData, data];
      setFormData(updatedProducts);
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      reset();
   };

   useEffect(() => {
      let storedProducts = localStorage.getItem("products")
      if (storedProducts) {
         setFormData(JSON.parse(storedProducts))
      }
   }, [])



   return (
      <div className="flex items-center justify-center py-8">
         <form
            onSubmit={handleSubmit(onSubmitForm)}
            className="bg-white rounded-2xl shadow-md border border-gray-200 w-full max-w-md p-8 space-y-6"
         >
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Add a Product</h2>

            <div>
               <input
                  {...register("productName", { required: "Product Name is required" })}
                  type="text"
                  placeholder="Product Name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition"
               />
               {errors.productName && <span className="text-red-500 text-xs">{errors.productName.message}</span>}
            </div>

            <div>
               <input
                  {...register("description", { required: "Description is required" })}
                  type="text"
                  placeholder="Description"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition"
               />
               {errors.description && <span className="text-red-500 text-xs">{errors.description.message}</span>}
            </div>

            <div>
               <input
                  {...register("price", {
                     required: "Price is required",
                     pattern: { value: /^\d+$/, message: "Enter a valid number" }
                  })}
                  type="number"
                  placeholder="Price (₹)"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition"
               />
               {errors.price && <span className="text-red-500 text-xs">{errors.price.message}</span>}
            </div>

            <div>
               <input
                  {...register("imageUrl", { required: "Image URL is required" })}
                  type="text"
                  placeholder="Image URL"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition"
               />
               {errors.imageUrl && <span className="text-red-500 text-xs">{errors.imageUrl.message}</span>}
            </div>

            <button
               type="submit"
               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow transition"
            >
               Create Card
            </button>
         </form>
      </div>
   )
}

export default ProductForm;
