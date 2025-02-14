import React, { useState } from 'react'
import '../../styles/Signup.css'
import { useNavigate } from 'react-router-dom'
import { addAdminLogin } from '../../../api'
import { useDispatch } from 'react-redux'

function AdminLogin() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()

    const [adminData,setAdminData] = useState([])
    const dispatch = useDispatch()

    const loginSubmit = ()=>{
        console.log(email,password)
        addAdminLogin({email,password},dispatch).then((result)=>{
          console.log(result);
          
          setAdminData(result)

        })
        // navigate('/adminhome')


    }
  return (
    <div className='main'>
    <div className='main-container'>
    <div className='container'>
    <div className="container-content">
          <div className="container-login">
            <h2>LOGIN HERE !</h2>
          </div>
          <form onSubmit={loginSubmit}>
            <label htmlFor="email">email</label>
            <input type="email" id="email" onChange={(e)=>{setEmail(e.target.value)}}/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={(e)=>{setPassword(e.target.value)}}/>
            <button type="submit">Login</button>
          </form>
        </div>
    </div>
    </div>
    </div>
  )
}

export default AdminLogin