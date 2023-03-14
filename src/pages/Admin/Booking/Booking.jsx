import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../../../template/DashboardLayout/DashboardLayout'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import ModalMedium from '../../../../components/Dashboard/Modals/ModalMedium/ModalMedium';
import FormInput from '../../../../components/Dashboard/Form/FormInput/FormInput';

import { useGetAllBookingQuery, useUpdateBookingByIdMutation } from '../../../features/booking/bookingApi';


const BookingInformation = () => {
  const {data: bookings, isLoading, isSuccess} = useGetAllBookingQuery()
  const [updateBookingById] = useUpdateBookingByIdMutation()

  const updateStatus = async (data) => {
    await updateBookingById({id: data.id, data: {...data, status: 1}})
  }

  const setStatusPayment = (status) => {
    switch(status) {
      case 0: 
        return 'Payment Unverifed'
      case 1: 
        return 'Payment verifed'
    }
  }


  return (
    <DashboardLayout title={`Booking Information`}>
       <div className="row">
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
                    <th>Id Booking</th>
                    <th>Contact Name</th>
                    <th>Payment Status</th>
                    <th className='text-center'>Operation</th>
                  </tr>
                  </thead>
                  <tbody>
                    {bookings?.map((booking, i) => (
                      <tr key={i}>
                        <td>{i+1}</td>
                        <td>{booking.id}</td>
                        <td>{booking.name_contact}</td>
                        <td className={`text-light ${booking.status == 0 ? 'bg-warning' : 'bg-success'}`}>{setStatusPayment(booking.status)}</td>
                        <td className='d-flex justify-content-center'>
                          <div className="dropdown mx-auto">
                            <FontAwesomeIcon className='pointer py-1 px-2 btn btn-primary' icon={faEllipsisVertical} data-bs-toggle="dropdown" aria-expanded="false"/>
                            <ul className="dropdown-menu">
                              <li onClick={(e) => updateStatus(booking)}>
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
                    <th>Id Booking</th>
                    <th>Contact Name</th>
                    <th>Payment Status</th>
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

export default BookingInformation