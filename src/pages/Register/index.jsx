import React from 'react'
import AuthTemplate from '../../../template/AuthLayout/AuthTemplate'
import InputAuthForm from '../../../components/Forms/AuthForm/InputAuthForm'
import CheckBox from '../../../components/AuthMolekuls/CheckBox'
import { Link } from 'react-router-dom'
import { useUserRegisterMutation } from '../../features/auth/authApi'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

const Register = () => {

  const dispatch = useDispatch()
  const [registerUser] = useUserRegisterMutation()
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setData(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = async () => {
    e.preventDefault();
    await registerUser({ data })
  }

  return (
    <AuthTemplate title={'Register'}>
      <form onSubmit={handleSubmit}>
        <InputAuthForm title="Fullname" name={'name'} type="text" value={data.name} placeholder='Fullname' req={'required'} onchange={handleChange} />
        <InputAuthForm title="Email" name={'email'} type="email" value={data.email} placeholder='Email' req={'required'} onchange={handleChange} />
        <InputAuthForm title="Password" name={'password'} type="password" value={data.password} placeholder='Password' req={'required'} onchange={handleChange} />

        <div className="button d-grid my-2">
          <button type='submit' className='btn btn-blue-height fw-bolder d-flex align-items-center justify-content-center'>Sign Up</button>
        </div>
        <CheckBox />
        <hr className='mx-auto' style={{ width: '80%' }} />
        <div className="have-account text-center d-grid">
          <p>Already have an account</p>
          <Link to={'/login'} className='btn btn-border-blue-height fw-bolder d-flex align-items-center justify-content-center text-primary'>Sign in</Link>
        </div>
      </form>
    </AuthTemplate>
  )
}

export default Register