import React from 'react'
import Home from './Screens/Home'
import Users from './Screens/Users'
import { Route, Routes } from 'react-router-dom'
import AddUsers from './Screens/AddUsers'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div>


      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/users' element={<Users></Users>}></Route>
        <Route path='/addUsers' element={<AddUsers></AddUsers>}></Route>
      </Routes>

    </div>
  )
}

export default App