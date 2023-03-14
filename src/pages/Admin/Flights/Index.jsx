import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../../../template/DashboardLayout/DashboardLayout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faEllipsisVertical, faPenSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useDeleteFlightByIdMutation, useGetAllFlightQuery } from '../../../features/flight/flightApi';

const FlightInformation = () => {
  
  const {data: flights, isLoading, isSuccess} = useGetAllFlightQuery({
    destination_place: "",
    starting_place: ""
  })
  const [deleteFlightById, {isLoading: isLoadingDeleteFlight}] = useDeleteFlightByIdMutation()

  const deleteHandler = async (id) => {
    if(window.confirm('Are you sure to delete this Flight?')){
      await deleteFlightById(id)
    }
  }

  return (
    <DashboardLayout title={`Flight`}>
       <div className="row">
        <div className="col-12">
          <div className="card shadow-none">
            <div className="card-header d-flex align-items-center justify-content-between w-100">
              <h3 className="card-title text-center">Data Airline</h3>
              <Link to={`/admin/dashboard/flights/create-flight`} className={`btn ms-auto btn-primary`}>Create Flight</Link>
            </div>
            
            <div className="card-body">
              {isLoading ? 'Loading....' : (
                <table id="example1" className="table table-bordered table-striped">
                  <thead>
                  <tr>
                    <th>#</th>
                    <th>id</th>
                    <th>Starting Place</th>
                    <th>Destination</th>
                    <th className='text-center'>Operation</th>
                  </tr>
                  </thead>
                  <tbody>
                    {flights?.map((flight, i) => (
                      <tr key={i}>
                        <td>{i+1}</td>
                        <td>{flight.id}</td>
                        <td>{flight.starting_place}</td>
                        <td>{flight.destination_place}</td>
                        <td className='d-flex justify-content-center gap-2'>
                          <div className="dropdown">
                            <FontAwesomeIcon className='pointer py-1 px-2 btn btn-primary' icon={faEllipsisVertical} data-bs-toggle="dropdown" aria-expanded="false"/>
                            <ul className="dropdown-menu">
                              <li>
                                <Link className="dropdown-item" to={`/admin/dashboard/flights/edit/${flight.id}`}>
                                <FontAwesomeIcon className='text-success me-2' icon={faPenSquare} /> 
                                Update Flight</Link>
                              </li>
                              <li onClick={() => deleteHandler(flight.id)}>
                                <Link className="dropdown-item" to="#">
                                  <FontAwesomeIcon className='text-danger me-2' icon={faTrash} />
                                  Delete Flight</Link>
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
                    <th>id</th>
                    <th>Starting Place</th>
                    <th>Destination</th>
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

export default FlightInformation