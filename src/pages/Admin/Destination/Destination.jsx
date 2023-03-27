import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../../../template/DashboardLayout/DashboardLayout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { useUpdateActiveAdminMutation } from '../../../features/admin/adminApi';
import { useAdminRegisterMutation } from '../../../features/auth/authApi';
import FormInput from '../../../../components/Dashboard/Form/FormInput/FormInput';
import { useGetAllDestinationQuery, useUpdateDestinationByIdMutation } from '../../../features/destination/destinationApi';
import { failedLoading, showLoading, successLoading } from '../../../common/loadingHandler';

const DestinationInformation = () => {
  const [updateActiveAdmin, { isLoading: isLoadingUpdateActiveAdmin, isSuccess: isSuccessUpdateActiveAdmin }] = useUpdateActiveAdminMutation();
  const [updateDestinationById, {isLoading: isLoadingUpdateDestinationById, isSuccess: isSuccessUpdateDestination, isError: isErrorUpdateDestination}] = useUpdateDestinationByIdMutation()
 
  const {data : destinations , isLoading: isLoadingDestinations, isError: isErrorDestinations} = useGetAllDestinationQuery()
  const [dataDestinationUpdate, setDataDestinationUpdate] = useState({})


  const changeHandler = (e) => {
    console.log(dataDestinationUpdate)
    setDataDestinationUpdate(prev => {
      return {
        ...prev,
        [e.target.name] : e.target.value
      }
    })
  }

  const updateDestinationHandler = async (e) => {
    const formData = new FormData()
    formData.append('name', dataDestinationUpdate.name)
    formData.append('photo', dataDestinationUpdate.photo)
    formData.append('description', dataDestinationUpdate.description)
    formData.append('popularity', dataDestinationUpdate.popularity)
    await updateDestinationById({id: dataDestinationUpdate.id, data: formData})
  }

  useEffect(() => {
    if(isSuccessUpdateDestination) successLoading('Success Update Destination')
    if(isLoadingUpdateDestinationById) showLoading('Please wait, destination was updating')
    if(isErrorUpdateDestination) failedLoading(`failed update destination`)

  }, isLoadingUpdateDestinationById, isErrorUpdateDestination, isSuccessUpdateDestination)


  return (
    <DashboardLayout title={`Destination Information`}>
      <div className="row">
        <div className="col-12 mb-3">
        </div>
        <div className="col-12">
          <div className="card shadow">
            <div className="card-header">
              <h3 className="card-title text-center">Destination Information</h3>
            </div>
            <div className="card-body">
              {isLoadingDestinations ? 'Loading....' : (
                <table id="example1" className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Popularity</th>
                      <th>description</th>
                      <th className='text-center'>Operation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {destinations?.map((destination, i) => (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{destination.name}</td>
                        <td>{destination.popularity}</td>
                        <td>{destination.description}</td>
                        <td className='d-flex justify-content-center'>
                          <div className="dropdown mx-auto">
                            <FontAwesomeIcon className='pointer py-1 px-2 btn btn-primary' icon={faEllipsisVertical} data-bs-toggle="dropdown" aria-expanded="false" />
                            <ul className="dropdown-menu">
                              <li data-bs-toggle="modal" data-bs-target={`#staticBackdrop${i}`} onClick={() => setDataDestinationUpdate(destination)} >
                                <a className="dropdown-item" href="#">Update Destination</a>
                              </li>
                            </ul>
                          </div>
                        </td>

                        <div className="modal fade" id={`staticBackdrop${i}`} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div className="modal-body">
                                <FormInput 
                                  title={`Name`}
                                  type="text"
                                  name={'name'}
                                  placeholder="Input Name Destination" 
                                  value={dataDestinationUpdate?.name}
                                  onchange={changeHandler}
                                />

                                <label htmlFor={`description`}>Desciprtion</label>
                                <textarea className='form-control mb-3' name="description" id={`description${i}`} cols="30" rows="5" value={dataDestinationUpdate?.description} onChange={changeHandler}></textarea>

                                <FormInput 
                                  title={`Photo`}
                                  type="file"
                                  name={'photo'}
                                  placeholder="Input Photo" 
                                  onchange={(e) => setDataDestinationUpdate(prev => ({...prev, photo: e.target.files[0]}))}
                                />

                                <button className='btn btn-primary w-100' data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={updateDestinationHandler}>Create destination</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </tr>
                    ))}

                  </tbody>
                  <tfoot>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Popularity</th>
                      <th>description</th>
                      <th className='text-center'>Operation</th>
                    </tr>
                  </tfoot>
                </table>
              )}

            </div>

          </div>

        </div>
      </div>
    </DashboardLayout>
  )
}

export default DestinationInformation