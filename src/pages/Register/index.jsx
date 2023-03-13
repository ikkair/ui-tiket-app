import React from 'react'
import AuthTemplate from '../../../template/AuthLayout/AuthTemplate'
import InputAuthForm from '../../../components/Forms/AuthForm/InputAuthForm'
import CheckBox from '../../../components/AuthMolekuls/CheckBox'
import { Link } from 'react-router-dom'

const Register = () => {

  const handleChange = () => {
    
  }

  const handleSubmit = () => {

  }

  return (
    <AuthTemplate title={'Register'}>
      <form onSubmit={handleSubmit}>
      <InputAuthForm title="Fullname" name="fullname" type="text" placeholder='Fullname' req={'required'} onchange={handleChange}/>
      <InputAuthForm title="Email" name="email" type="email" placeholder='Email' req={'required'} onchange={handleChange}/>
      <InputAuthForm title="Password" name="password" type="password" placeholder='Password' req={'required'} onchange={handleChange}/>

      <div className="button d-grid my-2">
        <Link  className='btn btn-blue-height fw-bolder d-flex align-items-center justify-content-center'>Sign Up</Link>
      </div>
      <CheckBox/>
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