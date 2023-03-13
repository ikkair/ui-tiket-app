import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAdminRegisterMutation } from '../../../features/auth/authApi'

const RegisterAdmin = () => {
  const [adminRegister, {isLoading, isSuccess}] = useAdminRegisterMutation()
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
    phone: ""
  })

  const registerHandler = async (e) => {
    await adminRegister(credentials)
  }

  const changeHandler = (e) => {
    setCredentials(prev => {
      return {
        ...prev,
        [e.target.name] : e.target.value
      }
    })
  }


  useEffect(() => {
    if(isSuccess){
      setCredentials({
        username: "",
        email: "",
        password: "",
        phone: ""
      })
    }
  }, [isSuccess])

  return (
    <div className="row min-vh-100">
      <div className="col-12 overflow-hidden d-flex align-items-center justify-content-center">
        <div className="card bg-light shadow-none" style={{width: "18rem"}}>
          <div className="card-body d-flex flex-column">
            <h5 className="card-title fs-3 fw-bold text-center mb-3">Sign In</h5>
            <div className="mb-3">
              <label for="username" className="form-label fw-normal">Username</label>
              <input type="text" className="form-control" name='username' id="username" placeholder="Input Username" onChange={changeHandler}/>
            </div>
            <div className="mb-3">
              <label for="email" className="form-label fw-normal">Email address</label>
              <input type="Email" className="form-control" name='email' id="email" placeholder="example@mail.com" onChange={changeHandler}/>
            </div>
            <div className="mb-3">
              <label for="Phone" className="form-label fw-normal">Phone</label>
              <input type="number" className="form-control" name='phone' id="Phone" placeholder="Input Phone" onChange={changeHandler}/>
            </div>
            <div className="mb-2">
              <label for="password" className="form-label fw-normal">Password</label>
              <input type="password" className="form-control" name='password' id="password" placeholder="***********" onChange={changeHandler}/>
            </div>
            <div className="mb-2 d-flex justify-content-end">
              <Link type="submit" className='text-decoration-none text-dark' >Forgot Password</Link> 
            </div>
            <div className="mb-2">
              <input type="submit" className='btn btn-primary w-100' value={`Sign Up`} onClick={registerHandler}/>
            </div>

            <div className="mb-3">
              <Link to={`/admin/login`} className='btn btn-danger w-100' >Sign In</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterAdmin