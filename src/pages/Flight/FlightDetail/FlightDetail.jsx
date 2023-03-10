import React from 'react'
import SectionCard from '../../../../components/Cards/SectionCard/SectionCard'
import ProfileInputForm from '../../../../components/Forms/ProfileInputForm/ProfileInputForm'
import { formContactPerson } from '../../../../lib/flightForm'
import DoubleSideLayout from '../../../../template/DoubleSideLayout/DoubleSideLayout'
import Alert from 'react-bootstrap/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './FlightDetail.module.css'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import FlightAirlineDetailCard from '../../../../components/Cards/FlightAirlineDetailCard/FlightAirlineDetailCard'
import { Form, InputGroup } from 'react-bootstrap'
import { Card } from 'react-bootstrap'

const FlightDetail = () => {

  const submitHandler = async (e) => {
    e.preventDefault()
  }

  return (
    <DoubleSideLayout
      className={`${style.styleBaseLayout} mt-3`}
      classLeft={`col-12 col-lg-8 col-md-7 order-2 order-md-1`}
      classRight={`col-12 col-lg-4 col-md-5 order-1 order-md-2`}
      leftside={
        <>
          <Form onSubmit={submitHandler} className={'pb-3'}>
            <span className={`${style.textColorOptional} fw-semibold fs-5 mb-3 d-block`}>Contact Person Detail</span>
            <SectionCard className={`pt-3`}>
              {formContactPerson?.map(form => (
                <ProfileInputForm 
                  title={form.title}
                  name={form.name}
                  type={form.type}
                  placeholder={form.placeholder}
                />
              ))}

              <Form.Label className="text-secondary text-medium ps-2 mb-2">Phone Number</Form.Label>
              <InputGroup className="mb-4 border-2 border-bottom pb-1">
                <InputGroup.Text className='bg-transparent border-0 py-0 border-end' id="basic-addon1">+62</InputGroup.Text>
                <Form.Control
                  className={'border-0 py-0 shadow-none'}
                  placeholder="xxx xxxx xxxx"
                  name={`phone`}
                  aria-label="phone-number"
                  aria-describedby="phone-number"
                />
              </InputGroup>

              <Alert className='py-2 text-medium' variant={`danger`}>
                <FontAwesomeIcon className='text-danger me-2' icon={faTriangleExclamation} /> Make sure the customer data is correct.
              </Alert>
            </SectionCard>

            <span className={`fw-semibold fs-5 mb-3 d-block mt-4`}>Passangers Details</span>     
            <SectionCard className={`pt-4`}>
              <Alert className='py-2 d-flex align-items-center flex-wrap justify-content-between' variant={`primary`}>
                <span className='text-medium'>Passanger: 1 Adult</span>
                <span className='text-medium d-flex gap-2 align-items-center'>Same as contact person
                  <Form.Check 
                    className='fs-5 shadow-0'
                    type="switch"
                    id="custom-switch"
                  />
                </span>
              </Alert>
              <ProfileInputForm 
                title={`Full Name`}
                name={`name`}
                type={`text`}
                placeholder={`Input Your Full Name`}
              />

              <Form.Label className="text-secondary text-medium ps-2 mb-2">Passenger Type</Form.Label>
              <div className="d-flex gap-4">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Child
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Adult
                  </label>
                </div>
              </div>
            </SectionCard>

            <span className={`fw-semibold fs-5 mb-3 d-block mt-4`}>Insurance</span>
            <Card className={`border-0 mb-3 main-border overflow-hidden`}>
              <Card.Header className={`${style.cardInsurance} p-3 d-flex justify-content-between`}>
                <div className="d-flex">
                  <Form.Check
                    inline
                    value={true}
                    name="insurance"
                    type={`checkbox`}
                  />
                  <span className={`fw-semibold`}>Travel Insurance</span>
                </div>
                <span className={`fw-semibold text-blue`}>Rp. 2000/
                  <span className={`text-secondary fw-none text-medium`}>pax</span>
                </span>
                
              </Card.Header>
              <Card.Body className={`px-4 py-3 d-flex justify-content-between align-items-center`}>
                <span className="text-small">Get travel compensation up to $ 10.000,00</span>
              </Card.Body>
            </Card>   

            <div className="row">
              <div className="col-12 d-flex justify-content-center">
                <button type='submit' className={`${style.btnSubmit} btn btn-blue mx-auto fw-semibold`}>Proceed to Payment</button>
              </div>
            </div>
          </Form>  
        </>
      }
    >
      <span className={`fw-semibold fs-5 mb-3 d-block text-light`}>Flight Details</span>
      <FlightAirlineDetailCard data={""}/> 
    </DoubleSideLayout>
  )
}

export default FlightDetail