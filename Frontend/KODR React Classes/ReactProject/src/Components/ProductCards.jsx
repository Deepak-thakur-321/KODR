import React from 'react';

const ProductCards = ({ products }) => (
   <div className="bg-gray-50 min-h-full py-10 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
         {products.map((product, index) => (
            <div
               key={index}
               className="group bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden 
                     transition hover:shadow-lg hover:border-blue-500 flex flex-col"
            >
               <div className="w-full h-48 bg-gray-100 overflow-hidden">
                  <img
                     src={product.imageUrl}
                     alt={product.productName}
                     className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
               </div>

               <div className="flex flex-col flex-1 p-5 justify-between">
                  <div>
                     <h3 className="text-lg font-semibold text-gray-900 truncate">
                        {product.productName}
                     </h3>
                     <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                        {product.description}
                     </p>
                  </div>

                  <div className="mt-4">
                     <div className="flex items-baseline gap-2">
                        <span className="text-blue-600 font-bold text-lg">
                           ₹{product.price}
                        </span>
                        {product.originalPrice && product.originalPrice > product.price && (
                           <>
                              <span className="text-gray-400 line-through text-sm">
                                 ₹{product.originalPrice}
                              </span>
                              <span className="text-green-600 text-xs font-semibold">
                                 {`(${Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF)`}
                              </span>
                           </>
                        )}
                     </div>

                     <button
                        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg shadow hover:bg-blue-700 transition"
                     >
                        Add to Cart
                     </button>
                  </div>
               </div>
            </div>
         ))}
      </div>
   </div>
);

export default ProductCards;
