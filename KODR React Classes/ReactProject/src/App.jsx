import React, { useState } from 'react'
import ProductForm from './Components/ProductForm'
import ProductCards from './Components/ProductCards'


const App = () => {

   const [formData, setFormData] = useState([])

   return (
      <div>
         <ProductForm formData={formData} setFormData={setFormData}></ProductForm>

         <ProductCards products={formData}></ProductCards>
      </div>
   )
}

export default App