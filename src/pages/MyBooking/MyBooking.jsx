import React from 'react'
import { useSelector } from 'react-redux'
import BookingCard from '../../../components/Cards/BookingCard/BookingCard'
import ProfileCard from '../../../components/Cards/ProfileCard/ProfileCard'
import SectionCard from '../../../components/Cards/SectionCard/SectionCard'
import DoubleSideLayout from '../../../template/DoubleSideLayout/DoubleSideLayout'
import {useGetBookingByIdUserQuery} from '../../features/booking/bookingApi'
import { useGetFlightByIdQuery } from '../../features/flight/flightApi'

const MyBooking = () => {
  const user = useSelector(state => state?.auth?.user)
  console.log(user);

  const {data : myBooking, isLoading} = useGetBookingByIdUserQuery(user?.id)
  // const {data : flight} = useGetFlightByIdQuery(myBooking)
  // console.log(myBooking?.data?.id_flight);

  return (
    <DoubleSideLayout
      classLeft={'col-12 col-md-5 col-lg-4'}
      classRight={'col-12 col-md-7 col-lg-8 mt-3 mt-md-0'}
      leftside={<ProfileCard className={`d-none d-sm-flex`}/>}
    >
      <SectionCard header={true} title={"My Booking"}>
        <div className="row">
          <div className="col-12">
            <span className='fw-bold fs-3'>My Booking</span>
          </div>
        </div>
      </SectionCard>

      {myBooking?.data?.map(boks => (
        // console.log('hello'),
        <>
        <BookingCard 
          header={true}
          id_booking={boks.id}
          id_flight={boks.id_flight}  
          status={boks.status}
        />
        </>
      ))}
    </DoubleSideLayout>

  )
}

export default MyBooking