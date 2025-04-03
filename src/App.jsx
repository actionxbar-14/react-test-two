import React from 'react'
import Navbar from './components/Navbar'
import AddNote from './components/AddNote'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import UserContextProvider from './context/UserContext'


const App = () => {
  return (
    <div>

      <UserContextProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/notes" element={<AddNote/>}/>
      </Routes>

      </UserContextProvider>
     
      
      {/* <AddNote/> */}
     
      
      
    </div>
  )
}

export default App
