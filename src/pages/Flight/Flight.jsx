import React from 'react'
import SectionCard from '../../../components/Cards/SectionCard/SectionCard'
import ProfileInputForm from '../../../components/Forms/ProfileInputForm/ProfileInputForm'
import { formContactPerson } from '../../../lib/flightForm'
import DoubleSideLayout from '../../../template/DoubleSideLayout/DoubleSideLayout'
import Alert from 'react-bootstrap/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './Flight.module.css'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import FlightAirlineDetailCard from '../../../components/Cards/FlightAirlineDetailCard/FlightAirlineDetailCard'

const Flight = () => {
  return (
    <DoubleSideLayout
      className={`${style.styleBaseLayout} mt-3`}
      classLeft={`col-12 col-lg-8 col-md-7`}
      classRight={`col-12 col-lg-4 col-md-5`}
      leftside={
        <>
          <span className={`fw-semibold fs-5 mb-3 d-block text-light`}>Contact Person Detail</span>
          <SectionCard className={`pt-3`}>
            {formContactPerson?.map(form => (
              <ProfileInputForm 
                title={form.title}
                name={form.name}
                type={form.type}
                placeholder={form.placeholder}
              />
            ))}
            <Alert className='py-2' variant={`danger`}>
              <FontAwesomeIcon className='text-danger me-2' icon={faTriangleExclamation} /> Make sure the customer data is correct.
            </Alert>
          </SectionCard>
        </>
      }
    >
      <span className={`fw-semibold fs-5 mb-3 d-block text-light`}>Flight Details</span>
      <FlightAirlineDetailCard data={""}/> 
    </DoubleSideLayout>
  )
}

export default Flight