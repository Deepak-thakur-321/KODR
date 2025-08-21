import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './Features/CounterSlice'

const App = () => {

   const [amount, setAmount] = useState(0)
   const counter = useSelector((state) => state.counter.value)

   const dispatch = useDispatch()

   const handleIncrement = () => {
      dispatch(increment())
   }
   const handleDecrement = () => {
      dispatch(decrement())
   }
   const handleReset = () => {
      dispatch(reset())
   }
   const handleIncByAmount = () => {
      dispatch(incrementByAmount(amount))
   }

   return (
      <div className='container p-8'>

         <button className='bg-blue-500 px-7 py-1 rounded text-white text-xl' onClick={handleIncrement}>+</button>
         <p>Count:{counter}</p>
         <button className='bg-red-500 px-7 py-1 rounded text-white text-xl' onClick={handleDecrement}>-</button>
         <button className='bg-green-500 px-7 py-1 rounded text-white text-xl ml-5' onClick={handleReset}>Reset</button>

         <input type="number" onChange={(e) => setAmount(e.target.value)} value={amount} placeholder='Enter Number' />

         <button className='bg-yellow-500 px-7 py-1 rounded text-white text-xl ml-5' onClick={handleIncByAmount}>IncByAmount</button>


      </div>
   )
}

export default App