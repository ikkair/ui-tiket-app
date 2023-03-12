import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../../../template/DashboardLayout/DashboardLayout'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import ModalMedium from '../../../../components/Dashboard/Modals/ModalMedium/ModalMedium';
import FormInput from '../../../../components/Dashboard/Form/FormInput/FormInput';
import { useCreateAirlineMutation, useGetAllAirlineQuery, useUpdateAirlineByIdMutation } from '../../../features/airline/airlineApi';

const Airlane = () => {
  const {data: airlanes, isLoading, isSuccess} = useGetAllAirlineQuery()
  const [createAirline, {isLoading:isLoadingCreateAirline, isSuccess: isSuccessCreateAirline}] = useCreateAirlineMutation()
  const [updateAirlineById] = useUpdateAirlineByIdMutation()
  const [airlane, setAirlane] = useState({
    name: "",
    photo: null,
    active: false
  })
  const [dataAirlineUpdate, setDataAirlineUpdate] = useState({})

  const updateHandler = async (e, id) => {
    e.preventDefault()
    await updateAirlineById({id, data: {...dataAirlineUpdate, photo: 'github.com'}})
  }

  const updateStatus = async (data) => {
    await updateAirlineById({id:data.id, data:{...data, status: !data.status}})
  }
  
  const updateChangeHandler = (e) => {
    setDataAirlineUpdate(prev => {
      if(e.target.name == 'photo') {
        return {
          ...prev,
          photo: e.target.files[0]
        }
      }else {
        return {
          ...prev,
          [e.target.name] : e.target.value
        }
      }
     
    })
  }

  const createHandler = async (e) => {
    e.preventDefault()
    await createAirline({...airlane, photo: 'gdrive.com'})
    setAirlane({
      name:"",
      photo:null,
      active: false
    })
  }



  return (
    <DashboardLayout title={`Airlane`}>
       <div className="row">
        <div className="col-12">
        <Form onSubmit={createHandler}>
          <div className="row">
            <div className="col-5">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Airlane Name</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Input Airlane Name" 
                  value={airlane.name}
                  onChange={(e) => setAirlane(prev => ({...prev, name: e.target.value}))}
                />
              </Form.Group>
            </div>
            <div className="col-5">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Airlane Photo</Form.Label>
                <Form.Control 
                  type="file" 
                  placeholder="Input Airlane Name" 
                  onChange={(e) => setAirlane(prev => ({...prev, photo: e.target.files[0]}))}
                />
              </Form.Group>
            </div>
            <div className="col-2 d-flex align-items-end">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Button variant="primary" type="submit">
                  Create
                </Button>
              </Form.Group>
            </div>
          </div>
        </Form>
        </div>

        <div className="col-12">
          <div className="card shadow">
            <div className="card-header">
              <h3 className="card-title text-center">Data Airline</h3>
            </div>
            
            <div className="card-body">
              {isLoading ? 'Loading....' : (
                <table id="example1" className="table table-bordered table-striped">
                  <thead>
                  <tr>
                    <th>#</th>
                    <th>Logo</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th className='text-center'>Operation</th>
                  </tr>
                  </thead>
                  <tbody>
                    {airlanes?.map((airlane, i) => (
                      <tr>
                        <td>{i+1}</td>
                        <td>{airlane.photo}</td>
                        <td>{airlane.name}</td>
                        <td>{airlane.status ? 'active' : 'Off'}</td>
                        <td className='d-flex justify-content-center'>
                          <div className="dropdown mx-auto">
                            <FontAwesomeIcon className='pointer py-1 px-2 btn btn-primary' icon={faEllipsisVertical} data-bs-toggle="dropdown" aria-expanded="false"/>
                            <ul className="dropdown-menu">
                              <li data-bs-toggle="modal" data-bs-target={`#exampleModal${i}`}><a className="dropdown-item" href="#" onClick={() => setDataAirlineUpdate(airlane)}>Update</a></li>
                              <li
                                onClick={(e) => updateStatus(airlane)}
                              >
                                <a className="dropdown-item" href="#">Change Status</a>
                              </li>
                            </ul>
                          </div>
                          
                          <ModalMedium id={`exampleModal${i}`} title={`Update airlane`}>
                            <Form onSubmit={(e) => updateHandler(e, airlane.id)}>
                              <FormInput 
                                title={`Airlane Name`}
                                type="text"
                                name={'name'}
                                placeholder="Input Airlane Name" 
                                value={dataAirlineUpdate?.name}
                                onchange={updateChangeHandler}
                              />
                                <FormInput 
                                title={`Photo (jpg, png, jpeg)`}
                                type="file"
                                name={'photo'}
                                placeholder="Input Airlane logo" 
                                onchange={updateChangeHandler}
                              />
                              <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
                                <Button variant="primary" className='w-100' type="submit"  data-bs-dismiss="modal" aria-label="Close">
                                  Update
                                </Button>
                              </Form.Group>
                            </Form>
                          </ModalMedium>
                        </td>
                      </tr>
                    ))}
                  
                  </tbody>
                  <tfoot>
                  <tr>
                    <th>#</th>
                    <th>Logo</th>
                    <th>Name</th>
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
     
    </DashboardLayout>
  )
}

export default Airlane