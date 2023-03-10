import React from 'react'
import AuthTemplate from '../../../template/AuthLayout/AuthTemplate'
import InputAuthForm from '../../../components/Forms/AuthForm/InputAuthForm'
import { Link } from 'react-router-dom'


const ForgotPassword = () => {
  return (
    <AuthTemplate title={'Forgot Password'}>
      <InputAuthForm title="Email" name="email" type="email" placeholder='Email' />

      <div className="button d-grid my-2">
        <Link className='btn btn-blue-height fw-bolder d-flex align-items-center justify-content-center'>Send</Link>
        <p className='text-center pt-4 text-blue'>You’ll get message soon on your email</p>
      </div>
    </AuthTemplate>
  )
}

export default ForgotPassword