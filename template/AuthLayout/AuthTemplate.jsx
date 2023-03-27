import React, { Children } from 'react'
import style from './style.module.css'
import { Banner } from '../../components/AuthMolekuls/Banner'
import vector from '../../src/assets/auth/vector 02.png'

const AuthTemplate = ({ children , title}) => {
  return (
    <main className="container-fluid">
      <div className="row">
        <div className="col-md-6 col-lg-7 col-12 d-md-block d-none p-0"><Banner /></div>

        <div className={`col-md-6 col-lg-5 col-12 ${style.right} d-grid`} >
          <div className="row my-5 justify-content-center align-items-center">
            <div className="col-10 col-md-8 col-lg-7 d-flex flex-column">
              <div className="logo position-relative top-0 pt-2">
                <img src={vector} alt='' /><span className='ms-3 fw-bolder' style={{fontSize: '20px'}}>Ankasa</span>
              </div>
              <h1 className='fw-bolder my-5 mt-5'>{title}</h1>
              {children}
            </div>
          </div>
        </div>
    </div>
    </main >
  )
}

export default AuthTemplate