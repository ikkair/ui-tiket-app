import React, { useEffect, useState } from 'react'
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
import PassangerCard from '../../../../components/Cards/PassangerCard/PassangerCard'
import { useGetFlightByIdQuery } from '../../../features/flight/flightApi'
import { useParams } from 'react-router'
import { useSearchParams } from 'react-router-dom'
import { useCreateBookingMutation } from '../../../features/booking/bookingApi'
import { authApi } from '../../../features/auth/authApi'
import { useCreatePassangerMutation } from '../../../features/passanger/passangerApi'
import { useSelector } from 'react-redux'

const FlightDetail = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [createBooking, {isLoading: isLoadingCreateBooking, isSuccess: isSuccessCreateBooking}] = useCreateBookingMutation()
  const [createPassanger, {isLoading: isLoadingCreatePassanger, isSuccess: isSuccessCreatePassanger}] = useCreatePassangerMutation()
  const {id} = useParams()
  
  const {data:flight, isLoading, isSuccess} = useGetFlightByIdQuery(id, {skip: id ? false : true})
  const [price, setPrice] = useState(flight?.price)

  const [passangers, setPassangers] = useState([])
  const [booking, setBooking] = useState({
    name_contact: "", 
    id_flight: id, 
    email_contact: "", 
    phone_contact: "", 
    insurance: false,
    capacity: getCapacity(),
    status: 0,
  })

  const changeHandlerContact = (e) => {
    console.log(booking)
    setBooking(prev => {
      return {
        ...prev,
        [e.target.name] : e.target.value
      }
    })
  }

  const changeHandlerPassanger = (e, i) => {
    setPassangers(prev => {
      const currentData = {...prev[i], [e.target.name] : e.target.value}
      prev[i] = currentData 
      return prev
    })
  }

  function getCapacity() {
    if(Number(searchParams.get('capacity')) <= 1){
      return 1
    }else {
      return Number(searchParams.get('capacity'))
    }
  }

  async function generatePassanger (id) {
    return await Promise.all(passangers?.map(async (passanger) => {
      await createPassanger({...passanger, id_booking: id})
    }))
  }

  const addBookingHandler = async (e) => {
    e.preventDefault()

    const res = await createBooking({...booking, total_price: flight.price * booking.capacity})
    await generatePassanger(res.data.queryId)
  }

  const renderCardPassanger = () => {
    let element = []
    if(passangers.length > 0){
      for(let i = 0; i < getCapacity(); i++) {
        element.push(
          <div key={i} >
            <span className={`fw-semibold fs-5 mb-2 d-block mt-4`}>Passangers Details</span>     
            <SectionCard className={`pt-4`}>
              <PassangerCard 
                data={passangers[i]} 
                onchange={(e) => changeHandlerPassanger(e, i)} 
              />
            </SectionCard>
          </div>
        )
      }
    }   
    return element
  }

  useEffect(() => {
    function setDataPassangers() {
      return setPassangers(prev => {
        const data = prev
        if(passangers.length < getCapacity()) {
          for(let i = 0; i < getCapacity(); i++) {
            data.push({
              name: "",
              category_passenger: "",
              id_seat : ""
            })
          }
        }
       
        return data
      })
    }
    return () => {setDataPassangers()}
  }, [])



  return (
    <DoubleSideLayout
      className={`${style.styleBaseLayout} mt-3`}
      classLeft={`col-12 col-lg-8 col-md-7 order-2 order-md-1`}
      classRight={`col-12 col-lg-4 col-md-5 order-1 order-md-2`}
      leftside={
        <>
          <Form className={'pb-3'}>
            <span className={`${style.textColorOptional} fw-semibold fs-5 mb-3 d-block`}>Contact Person Detail</span>
            <SectionCard className={`pt-3`}>
              {formContactPerson?.map((form, i) => (
                <ProfileInputForm 
                  key={i}
                  title={form.title}
                  name={form.name}
                  type={form.type}
                  placeholder={form.placeholder}
                  value={booking[form.name]}
                  onchange={(e) => changeHandlerContact(e)}
                />
              ))}

              <Form.Label className="text-secondary text-medium ps-2 mb-2">Phone Number</Form.Label>
              <InputGroup className="mb-4 border-2 border-bottom pb-1">
                <InputGroup.Text className='bg-transparent border-0 py-0 border-end' id="basic-addon1">+62</InputGroup.Text>
                <Form.Control
                  className={'border-0 py-0 shadow-none'}
                  placeholder="xxx xxxx xxxx"
                  name={`phone_contact`}
                  type={'number'}
                  value={booking.phone_contact}
                  onChange={changeHandlerContact}
                />
              </InputGroup>

              <Alert className='py-2 text-medium' variant={`danger`}>
                <FontAwesomeIcon className='text-danger me-2' icon={faTriangleExclamation} /> Make sure the customer data is correct.
              </Alert>
            </SectionCard>

            {renderCardPassanger()?.map(card => card)}

            <span className={`fw-semibold fs-5 mb-3 d-block mt-4`}>Insurance</span>
            <Card className={`border-0 shadow-none mb-3 main-border overflow-hidden`}>
              <Card.Header className={`${style.cardInsurance} p-3 d-flex justify-content-between`}>
                <div className="d-flex">
                  <Form.Check
                    inline
                    className='d-flex align-items-center'
                    name="insurance"
                    type={`checkbox`}
                    onChange={(e) => setBooking(prev => {
                      return {
                        ...prev,
                        insurance: !prev.insurance
                      }
                    })}
                  />
                  <span className={`fw-semibold`}>Travel Insurance</span>
                </div>
                <span className={`fw-semibold text-blue ms-auto`}>Rp. 2000/
                  <span className={`text-secondary fw-none text-medium`}>pax</span>
                </span>
                
              </Card.Header>
              <Card.Body className={`px-4 py-3 d-flex justify-content-between align-items-center`}>
                <span className="text-small">Get travel compensation up to $ 10.000,00</span>
              </Card.Body>
            </Card>   

            <div className="row">
              <div className="col-12 d-flex justify-content-center">
                <button 
                  type='submit' 
                  className={`${style.btnSubmit} btn btn-blue mx-auto fw-semibold`}
                  onClick={addBookingHandler}
                >Proceed to Payment</button>
              </div>
            </div>
          </Form>  
        </>
      }
    >
      <span className={`fw-semibold fs-5 mb-3 d-block text-light`}>Flight Details</span>
      <FlightAirlineDetailCard data={flight} price={flight?.price} passangerCapacity={getCapacity()}/> 
    </DoubleSideLayout>
  )
}

export default FlightDetail