import './App.css'
import React, { useState, useEffect } from 'react'
import Checkout from './components/Checkout'
import { useSelector } from 'react-redux'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Login'
import Procedure from './components/Procedure'
import AdminHome from './components/AdminHome'
import FirstPage from './components/FirstPage'
import AddData from './components/AddData'
import ShowTranscript from './components/ShowTranscript'
import SecondPage from './components/SecondPage'
import ThirdPage from './components/ThirdPage'
import ForthPage from './components/ForthPage'
import FifthPage from './components/FifthPage'


const App = () => {
  const role = useSelector((state) => state.authReducer.authData?.data.role)

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={role === 'admin' ? <Navigate to='/admin/home' /> : <Procedure />}
        />
        <Route exact path='/admin/login' element={<Login />} />
        <Route exact path='/admin/transcript/firstpage/:id' element={<FirstPage />} />
        <Route exact path='/admin/transcript/secondpage/:id' element={<SecondPage />} />
        <Route exact path='/admin/transcript/thirdpage/:id' element={<ThirdPage />} />
        <Route exact path='/admin/transcript/forthpage/:id' element={<ForthPage />} />
        <Route exact path='/admin/transcript/fifthpage/:id' element={<FifthPage />} />
        <Route exact path='/admin/transcript/final/:id' element={<ShowTranscript />} />
        <Route exact path='/admin/home/adddata' element={<AddData/>} />
        <Route exact path='/form' element={<Checkout />} />
        <Route exact path='/procedure' element={<Procedure />} />
        <Route
          exact
          path='/admin/home'
          element={role === 'admin' ? <AdminHome /> : <Navigate to='../' />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
