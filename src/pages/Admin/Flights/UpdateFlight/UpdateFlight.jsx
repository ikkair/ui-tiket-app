import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useParams } from 'react-router'
import Swal from 'sweetalert2'
import FormInput from '../../../../../components/Dashboard/Form/FormInput/FormInput'
import { flightFacility, flightForm, flightTerminal } from '../../../../../lib/Flight/FlightForm'
import DashboardLayout from '../../../../../template/DashboardLayout/DashboardLayout'
import { reChangeDate } from '../../../../common/helper'
import { showLoading, successLoading } from '../../../../common/loadingHandler'
import { useGetAllAirlineQuery } from '../../../../features/airline/airlineApi'
import { useGetFlightByIdQuery, useUpdateFlightByIdMutation } from '../../../../features/flight/flightApi'

const UpdateFlight = () => {
  const {id} = useParams()
  const { data: airlines, isLoadingAirlines } = useGetAllAirlineQuery()
  const {data, isLoading, isSuccess, isError} = useGetFlightByIdQuery(id, {skip: id ? false : false})
  const [updateFlightById, {isLoading : isLoadingUpdateFlight, isSuccess: isSuccessUpdateFlight}] = useUpdateFlightByIdMutation()
  const [flight, setFlight] = useState({})
  console.log(flight)

  const convertToNumber = (type, data) => {
    if(type && type == 'number'){
      return Number(data)
    }
    return data
  } 

  const changeHandler = (e) => {
    setFlight(prev => {
      return {
        ...prev,
        [e.target.name] : convertToNumber(e.target.type, e.target.value)
      }
    })
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    await updateFlightById({id, data: flight})
  }

  useEffect(() => {
    if(isSuccess) {
      Swal.close()
      setFlight(prev => {
        return {
          ...data,
          departure_date : reChangeDate(data.departure_date),
          arrived_date : reChangeDate(data.arrived_date)
        }
      })
    }

    if(isLoading){
      showLoading('Please wait....')
    }

    if(isError) Swal.close()
   
  }, [isSuccess, isLoading. isError])


  return (
    <DashboardLayout title={`Update Flight - ID  ${id}`}>
      <div className="row">
        <div className="col-12">
        <Form onSubmit={submitHandler}>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Choose Airlane</Form.Label>
              <Form.Select aria-label="Default select example" name='id_airline' onChange={changeHandler}>
                {isLoadingAirlines ? 'Loading....' : (
                  airlines?.map(airlane => (
                    <option 
                      key={airlane.id} 
                      value={airlane.id} 
                      selected={airlane.id == flight?.id_airlane}
                      >{airlane.name}</option>
                  ))
                )}
              </Form.Select>
            </Form.Group>
            </div>
           
           {flightForm.map((input,i) => (
            <div key={i} className="col-12 col-sm-6 col-md-4">
              <FormInput 
                title={input.title}
                type={input.type}
                name={input.name}
                placeholder={input.placeholder}
                value={flight[input.name]}
                onchange={(e) => changeHandler(e)}
              />
            </div>
           ))}
         
          <div className="col-12 col-sm-6 col-md-4">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Terminal</Form.Label>
              <Form.Select aria-label="Default select example" name={`terminal`} onChange={changeHandler}>
                {flightTerminal?.map((terminal, i) => (
                   <option 
                   key={i} 
                   value={terminal} 
                   selected={terminal == flight?.terminal}>{terminal}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Transit</Form.Label>
              <Form.Select aria-label="Default select example" name='type_trip' onChange={changeHandler}>
                <option value={`one way`} selected={flight?.transit == 'one way'}>One Way</option>
                <option value={`rounded trip`} selected={flight?.transit == 'rounded trip'}>Rounded Trip</option>
              </Form.Select>
            </Form.Group>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <FormInput 
              title={`Gate`}
              type={'number'}
              name={'gate'}
              value={flight?.gate}
              placeholder={`Input number of gate`}
              onchange={(e) => changeHandler(e)}
            />
          </div>

          <div className="col-12 col-sm-6 col-md-4 d-flex">
            <Form.Group className="mb-3" controlId={'name'}>
              <Form.Label className='fw-semibold'>{`Facilities`}</Form.Label>
              <div className="d-flex gap-3">
                {flightFacility.map((facility, i) => (
                  <Form.Check
                    key={i} 
                    type={`checkbox`}
                    id={`default-${facility}`}
                    name={facility}
                    label={facility}
                    checked={flight?.[facility]}
                    onChange={(e) => setFlight(prev => ({...prev, [e.target.name] : !prev[facility] }))}
                  />
                ))}
              </div>
            </Form.Group>
          </div>
          <div className="col-12 col-sm-6 col-md-4 offset-0 offset-md-4 d-flex align-items-end">
            <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
              <Button variant="primary" className='w-100' type="submit">
                Create Flight
              </Button>
            </Form.Group>
          </div>

          </div>
        </Form>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default UpdateFlight