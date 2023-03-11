import React from 'react'
import { Form } from 'react-bootstrap'
import FormInput from '../../../../../components/Dashboard/Form/FormInput/FormInput'
import { flightFacility, flightForm, flightTerminal } from '../../../../../lib/Flight/FlightForm'
import DashboardLayout from '../../../../../template/DashboardLayout/DashboardLayout'


const CreateFlight = () => {
  return (
    <DashboardLayout title={`Create New Flight`}>
      <div className="row">
        <div className="col-12">
        <Form>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Choose Airlane</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Garuda Indonesia</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
            </div>
           
           {flightForm.map(input => (
            <div className="col-12 col-sm-6 col-md-4">
              <FormInput 
                title={input.title}
                type={input.type}
                name={input.name}
                placeholder={input.placeholder}
                onchange={(e) => {}}
              />
            </div>
           ))}
          <div className="col-12 col-sm-6 col-md-4 d-flex">
            <Form.Group className="mb-3" controlId={'name'}>
              <Form.Label className='fw-semibold'>{`Facilities`}</Form.Label>
              <div className="d-flex gap-3">
                {flightFacility.map(facility => (
                  <Form.Check 
                    type={`checkbox`}
                    id={`default-${facility}`}
                    label={facility}
                  />
                ))}
              </div>
            </Form.Group>
          </div>
          <div className="col-6 col-sm-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Terminal</Form.Label>
              <Form.Select aria-label="Default select example">
                {flightTerminal?.map((terminal, i) => (
                   <option key={i} value={terminal}>{terminal}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </div>

          </div>
        </Form>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default CreateFlight