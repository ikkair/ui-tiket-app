import React from 'react'
import { Link } from 'react-router-dom'
import { useAdminLoginMutation } from '../../../features/auth/authApi'
import style from './LoginAdmin.module.css' 

const LoginAdmin = () => {
  const [adminLogin, {isLoading, isSuccess}] = useAdminLoginMutation()
  const [credentials, setCredentials] = useState({
    username: "",
    passowrd: ""
  })

  return (
    <div className="row min-vh-100">
      <div className="col-12 overflow-hidden d-flex align-items-center justify-content-center">
        <div className="card bg-light shadow-none" style={{width: "18rem"}}>
          <div className="card-body d-flex flex-column">
            <h5 className="card-title fs-3 fw-bold text-center mb-3">Sign In</h5>
            <div className="mb-3">
              <label for="email" className="form-label fw-normal">Email address</label>
              <input type="Email" className="form-control" id="email" placeholder="example@mail.com" />
            </div>
            <div className="mb-2">
              <label for="password" className="form-label fw-normal">Password</label>
              <input type="password" className="form-control" id="password" placeholder="***********" />
            </div>
            <div className="mb-2 d-flex justify-content-end">
              <Link type="submit" className='text-decoration-none text-dark' >Forgot Password</Link> 
            </div>
            <div className="mb-2">
              <input type="submit" className='btn btn-primary w-100' value={`Sign In`}/>
            </div>

            <div className="mb-3">
              <Link to={`/admin/register`} className='btn btn-danger w-100' >Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginAdmin