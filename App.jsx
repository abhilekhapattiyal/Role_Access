import React, { useEffect } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Admin from './pages/Admin.jsx'
import {Toaster} from 'react-hot-toast' ;
import AdminLayouts from './Layouts/AdminLayouts.jsx'
import UserLayout from './Layouts/UserLayout.jsx'
import PublicLayout from './Layouts/PublicLayout.jsx'
import { useDispatch, useSelector} from 'react-redux'
import { updateUser } from './redux/AuthSlice.js'
export default function App() {
  const user=useSelector((state)=>state.Auth.user)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(updateUser())
  },[user])
  return (
    <>
    <BrowserRouter>
    <Toaster/>
    <Routes>
    <Route path='/' element={<UserLayout/>}>
      <Route path='/' element={<Home/>}/>
      </Route>
      <Route path='/admin' element={<AdminLayouts/>}>
      <Route index element={<Admin/>}/>

      </Route>
      <Route path='/' element={<PublicLayout/>}> 
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
