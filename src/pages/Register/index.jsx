import React from 'react'
import AuthTemplate from '../../../template/AuthLayout/AuthTemplate'
import InputAuthForm from '../../../components/Forms/AuthForm/InputAuthForm'
import CheckBox from '../../../components/AuthMolekuls/CheckBox'
import { Link } from 'react-router-dom'
import { useUserRegisterMutation } from '../../features/auth/authApi'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { showLoading, failedLoading, successLoading } from '../../common/loadingHandler'

const Register = () => {
  const navigate = useNavigate()
  const [registerUser, {isLoading, isSuccess, isError, error}] = useUserRegisterMutation()
  const [checkTerms, setCheckTerms] = useState(false);
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerUser(data)
  }

  const directPath = () => {
    return navigate('/login')
  }

  useEffect(() => {
    if (isLoading) {
      showLoading('Please Wait....')
    }

    if (isSuccess) {
      successLoading('Register Success, login and happy vacation 😍')
      setData({
        name: '',
        email: '',
        password: ''
      })
      directPath();
    }

    if (isError) {
      failedLoading(error?.data?.message)
      setData(prev => {
        return {
          ...prev,
          password: ''
        }
      })
    }

  }, [isLoading, isSuccess, isError])

  return (
    <AuthTemplate title={'Register'}>
      {error && (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          {error?.data?.message}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
      <form onSubmit={handleSubmit} method='post'>
        <InputAuthForm title="Fullname" name={'name'} type="text" value={data.name} placeholder='Fullname' req={'required'} onchange={handleChange} />
        <InputAuthForm title="Email" name={'email'} type="email" value={data.email} placeholder='Email' req={'required'} onchange={handleChange} />
        <InputAuthForm title="Password" name={'password'} type="password" value={data.password} placeholder='Password' req={'required'} onchange={handleChange} />

        <div className="button d-grid my-2">
          <button type='submit' className='btn btn-blue-height fw-bolder d-flex align-items-center justify-content-center' disabled={!(checkTerms && data.name && data.email && 
            data.password)}>Sign Up</button>
        </div>
        <CheckBox
          value={''}
          onchange={() => setCheckTerms((prev) => !prev)}
        />
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