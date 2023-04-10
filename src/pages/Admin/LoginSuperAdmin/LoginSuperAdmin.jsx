import React, { useEffect, useState } from 'react'
import { authApi, useSuperAdminLoginMutation } from '../../../features/auth/authApi'
import { showLoading } from '../../../common/loadingHandler'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../../../app/reducer/authSlice'
import { ssoAPi } from '../../../features/SSO/ssoApi'

const LoginSuperAdmin = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [superAdmin, { isLoading, isSuccess, isError, error }] = useSuperAdminLoginMutation()
  const [data, setData] = useState({
    emailOrUsername: "",
    password: "",
  });

  const changeHandler = (e) => {
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const directPath = () => {
    // return navigate('/admin/dashboard/flights')
    window.location.replace('/admin/dashboard/bookings')
  }

  const loginHandler = async (e) => {
    e.preventDefault();
    const res = await superAdmin(data);
    dispatch(ssoAPi.util.invalidateTags(['logoutSSO']))
    const {token, refreshToken, ...user} = res.data
    localStorage.setItem('role', user.role)
    dispatch(setCredentials({ user: user, token: res?.data?.token }));
  };

  useEffect(() => {
    if (isLoading) {
      showLoading('Please Wait...')
    }

    if (isError) {
      Swal.close();
      setData((prev) => {
        return {
          ...prev,
          password: "",
        };
      });
    }

    if (isSuccess) {
      Swal.close();
      directPath();
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
              <label for="email" className="form-label fw-normal">Email/Username</label>
              <input type="text" className="form-control" name='emailOrUsername' id="email" placeholder="example@mail.com" onChange={changeHandler}/>
            </div>
            <div className="mb-2">
              <label for="password" className="form-label fw-normal">Password</label>
              <input type="password" className="form-control" name='password' id="password" placeholder="***********" onChange={changeHandler}/>
            </div>
            <div className="mb-2">
              <input type="submit" className='btn btn-primary w-100' onClick={loginHandler}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginSuperAdmin