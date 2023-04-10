import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { setCredentials } from '../../../app/reducer/authSlice'
import { useAdminLoginMutation } from '../../../features/auth/authApi'
import { showLoading } from '../../../common/loadingHandler'
import Swal from 'sweetalert2'

const LoginAdmin = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [adminLogin, {isLoading, isSuccess, error, isError}] = useAdminLoginMutation()
  const [user, setUser] = useState({
    emailOrUsername: "",
    passowrd: ""
  })

  const loginHandler = async (e) => {
    const res = await adminLogin(user)
    const {refreshToken, token, ...other} = res.data
    dispatch(setCredentials({user: other, token: token}))
  }

  const changeHandler = (e) => {
    setUser(prev => {
      return {
        ...prev,
        [e.target.name] : e.target.value
      }
    })
  }

  useEffect(() => {
    if (isLoading) {
      showLoading('Please Wait ...')
    }

    if (isError) {
      Swal.close();
      setUser((prev) => {
        return {
          ...prev,
          password: "",
        };
      });
    }

    if (isSuccess) {
      Swal.close();
      window.location.replace('/admin/dashboard/bookings')
    }
  }, [isLoading, isSuccess, isError]);


  return (
    <div className="row min-vh-100">
      <div className="col-12 overflow-hidden d-flex align-items-center justify-content-center">
        <div className="card bg-light shadow-none" style={{width: "18rem"}}>
          <div className="card-body d-flex flex-column">
            <h5 className="card-title fs-3 fw-bold text-center mb-3">Sign In</h5>
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
            <div className="mb-3">
              <label for="emailOrUsername" className="form-label fw-normal">Email or Username</label>
              <input type="text" className="form-control" value={user.emailOrUsername} name='emailOrUsername' onChange={changeHandler} id="emailOrUsername" placeholder="example@mail.com" />
            </div>
            <div className="mb-2">
              <label for="password" className="form-label fw-normal">Password</label>
              <input type="password" className="form-control" value={user.password} name='password' onChange={changeHandler} id="password" placeholder="***********" />
            </div>
            <div className="mb-2 d-flex justify-content-end">
              <Link type="submit" className='text-decoration-none text-dark' >Forgot Password</Link> 
            </div>
            <div className="mb-2">
              <input type="submit" className='btn btn-primary w-100' value={`Sign In`} onClick={loginHandler}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginAdmin