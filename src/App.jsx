import React from 'react'
import Login from "./pages/Login.jsx"
import { Routes, Route } from 'react-router'
import ProfileUpdate from './pages/ProfileUpdate.jsx'
import Chat from './pages/Chat.jsx'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/profile' element={<ProfileUpdate />} />
      </Routes>
    </>
  )
}

export default App