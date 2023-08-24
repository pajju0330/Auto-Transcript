import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Toolbar from '@mui/material/Toolbar'
import { useDispatch } from 'react-redux'
import Typography from '@mui/material/Typography'
import Wcelogo from '../components/wcelogo.png'
import { useSelector } from 'react-redux'
import { logIn } from '../actions/AuthAction'
import login from './Login.module.css'
import './Checkout.css'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const dispatch = useDispatch()
  const user = useSelector((state) => state)
  useEffect(() => {
    if (user.authReducer.authData) {
      console.log(user.authReducer.authData.data.role)
      if (user.authReducer.authData.data.role === 'admin') {
        navigate('/admin/home')
      } else if (user.authReducer.authData.data.role === 'user') {
        navigate('/form')
      }
    }
  }, [user])

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(username, password)
    const data = { username, password }
    if (username && password) {
      dispatch(logIn(data))
    } else {
      setError('Please fill all the information')
    }
  }
  return (
    <>
      <div>
        <Toolbar id='header'>
          <img id='logo' src={Wcelogo} alt='WCE' />
          <h2 className={login.heading}>
            Walchand College of Engineering, Sangli
          </h2>
        </Toolbar>
      </div>
      <div className={login.loginform}>
        <h2>Welcome to Transcript Portal</h2>
        <form onSubmit={handleSubmit} className={login.form}>
          <h2 style={{ textAlign: 'center', marginBlockStart: '0rem' }}>
            Sign in
          </h2>
          {error && <p className='error'>{error}</p>}
          <div className={login.innerDiv}>
            <label htmlFor='username'>Username*</label>
            <input
              type='text'
              id='username'
              placeholder=' Enter your username'
              value={username}
              name='username'
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={login.innerDiv}>
            <label htmlFor='password'>Password*</label>
            <input
              type='password'
              id='password'
              value={password}
              name='password'
              placeholder=' Enter your password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type='submit' className={login.submitbtn}>
            Login
          </button>
          <a
            href=''
            onClick={() => {
              navigate('/procedure')
            }}
            className={login.continueasguest}
          >
            Continue as guest
          </a>
        </form>
      </div>
    </>
  )
}

export default Login
