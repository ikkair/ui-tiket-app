import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../../../template/DashboardLayout/DashboardLayout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { useGetAllAdminQuery, useUpdateActiveAdminMutation } from '../../../features/admin/adminApi';
import { useAdminRegisterMutation } from '../../../features/auth/authApi';
import FormInput from '../../../../components/Dashboard/Form/FormInput/FormInput';


const AdminInformation = () => {
  const { data: admins, isLoading, isSuccess } = useGetAllAdminQuery()
  const [updateActiveAdmin, { isLoading: isLoadingUpdateActiveAdmin, isSuccess: isSuccessUpdateActiveAdmin }] = useUpdateActiveAdminMutation();
  const [adminRegister, { isLoading: isLoadingAdminRegister, isSuccess: isSuccessAdminRegister }] = useAdminRegisterMutation()
  const [data, setData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    phone: ""
  })

  const createAdmin = async (d) => {
    await adminRegister(data)
  }


  const updateStatus = async (data) => {
    await updateActiveAdmin({ id: data.id, data: { is_actived: !data.is_actived } })
  }

  const changeHandler = (e) => {
    console.log(data)
    setData(prev => {
      return {
        ...prev,
        [e.target.name] : e.target.value
      }
    })
  }

  const createAdminHandler = async (e) => {
    await createAdmin(data)
  }

  const setStatusPayment = (status) => {
   if(status) {
    return 'Active'
   }
   return 'Deactive'
  }


  return (
    <DashboardLayout title={`Booking Information`}>
      <div className="row">
        <div className="col-12 mb-3">
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Create Admin
          </button>
        </div>
        <div className="col-12">
          <div className="card shadow">
            <div className="card-header">
              <h3 className="card-title text-center">Data Booking Information</h3>
            </div>
            <div className="card-body">
              {isLoading ? 'Loading....' : (
                <table id="example1" className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Email</th>
                      <th>Username</th>
                      <th>Status</th>
                      <th className='text-center'>Operation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {admins?.map((admin, i) => (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{admin.username}</td>
                        <td>{admin.email}</td>
                        <td className={`text-light ${!admin.is_actived ? 'bg-warning' : 'bg-success'}`}>{setStatusPayment(admin.is_actived)}</td>
                        <td className='d-flex justify-content-center'>
                          <div className="dropdown mx-auto">
                            <FontAwesomeIcon className='pointer py-1 px-2 btn btn-primary' icon={faEllipsisVertical} data-bs-toggle="dropdown" aria-expanded="false" />
                            <ul className="dropdown-menu">
                              <li onClick={(e) => updateStatus(admin)}>
                                <a className="dropdown-item" href="#">Change Status</a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    ))}

                  </tbody>
                  <tfoot>
                    <tr>
                      <th>#</th>
                      <th>Email</th>
                      <th>Username</th>
                      <th>Status</th>
                      <th className='text-center'>Operation</th>
                    </tr>
                  </tfoot>
                </table>
              )}

            </div>

          </div>

        </div>
      </div>

      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <FormInput 
                title={`Fullname`}
                type="text"
                name={'fullname'}
                placeholder="Input fullname" 
                value={data?.fullname}
                onchange={changeHandler}
              />
              <FormInput 
                title={`Username`}
                type="text"
                name={'username'}
                placeholder="Input Username" 
                value={data?.username}
                onchange={changeHandler}
              />
              <FormInput 
                title={`Email`}
                type="email"
                name={'email'}
                placeholder="Input Email" 
                value={data?.email}
                onchange={changeHandler}
              />
              <FormInput 
                title={`Password`}
                type="password"
                name={'password'}
                placeholder="**********" 
                value={data?.password}
                onchange={changeHandler}
              />
              <FormInput 
                title={`Phone`}
                type="number"
                name={'phone'}
                placeholder="Input Phone" 
                value={data?.phone}
                onchange={changeHandler}
              />

              <button className='btn btn-primary w-100' data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={createAdminHandler}>Create admin</button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default AdminInformation