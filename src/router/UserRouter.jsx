import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Users } from '../components/users/Users'
import { ListComponents } from '../components/list/ListComponents'

export const UserRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<ListComponents />}/>
      <Route path="/users" element={<Users />} />
    </Routes>
  )
}
