import React from 'react'
import AuthTemplate from '../../../template/AuthLayout/AuthTemplate'
import InputAuthForm from '../../../components/Forms/AuthForm/InputAuthForm'
import { Link } from 'react-router-dom'
import facebook from '../../assets/auth/facebook.png'
import google from '../../assets/auth/google.png'
import style from './Login.module.css'


const Login = () => {

  const changeHandler = () => {

  }

  return (
    <AuthTemplate title={'Login'}>
      <form>
        <InputAuthForm title="Email" name="email" type="email" placeholder='Email' onchange={changeHandler}/>
        <InputAuthForm title="Password" name="password" type="password" placeholder='Password' onchange={changeHandler} />
      </form>

      <div className="button d-grid my-2">
        <button style={{ height: '50px' }} className='btn btn-blue fw-bolder'>Sign in</button>
      </div>
      <div className="forgot text-center mt-3 mb-5">
        <p className='p-0 mb-0'>Did You forgot your password?</p>
        <Link to='/forgot-password' className='text-blue no-underline'>Tap here for reset</Link>
      </div>
      <hr className='mx-auto' style={{ width: '80%' }} />

      <div className="sign-with text-center">
        <p>or sign with</p>
        <div className="link-other-sign d-flex justify-content-center ">
              <Link to='' className={`border-blue ${style.link} d-flex align-items-center justify-content-center me-4 rounded`} alt="" >
                <img src={google} alt="" />
              </Link>
              <Link to='' className={`border-blue ${style.link} d-flex align-items-center justify-content-center rounded`} alt="" >
                <img src={facebook} alt="" />
              </Link>
        </div>
      </div>

    </AuthTemplate>
  )
}

export default Login