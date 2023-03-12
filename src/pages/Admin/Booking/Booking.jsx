import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../../../template/DashboardLayout/DashboardLayout'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import ModalMedium from '../../../../components/Dashboard/Modals/ModalMedium/ModalMedium';
import FormInput from '../../../../components/Dashboard/Form/FormInput/FormInput';

import { useGetAllBookingQuery } from '../../../features/booking/bookingApi';

const BookingInformation = () => {
  const {data: bookings, isLoading, isSuccess} = useGetAllBookingQuery()

  const [airlane, setAirlane] = useState({
    name: "",
    photo: null,
    active: false
  })

  const updateHandler = async (e, id) => {
    e.preventDefault()
  }

  const updateStatus = async (data) => {
  }
  
  // const updateChangeHandler = (e) => {
  //   setDataAirlineUpdate(prev => {
  //     if(e.target.name == 'photo') {
  //       return {
  //         ...prev,
  //         photo: e.target.files[0]
  //       }
  //     }else {
  //       return {
  //         ...prev,
  //         [e.target.name] : e.target.value
  //       }
  //     }
     
  //   })
  // }

  const setStatusPayment = (status) => {
    switch(status) {
      case 0: 
        return 'Payment Unverifed'
      case 1: 
        return 'Payment verifed'
    }
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
    <DashboardLayout title={`Booking Information`}>
       <div className="row">
        <div className="col-12">
          <div className="card shadow">
            <div className="card-header">
              <h3 className="card-title text-center">Data BookingInformation</h3>
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