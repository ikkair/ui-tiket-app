import React from 'react'
import { Form } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import ProfileInputForm from '../../Forms/ProfileInputForm/ProfileInputForm';

const PassangerCard = ({data, onchange}) => {
  const changeHandler = (e) => {
    onchange(e)
  }
  return (
    <>
      <Alert className='py-2 d-flex align-items-center flex-wrap justify-content-between' variant={`primary`}>
        <span className='text-medium'>Passanger: 1 Adult</span>
        <div className='d-flex gap-2 align-items-start'>
          <span className='d-block text-medium'>Same as contact person</span>
          <Form.Check 
            className='shadow-none bg-success'
            type="switch"
            id="custom-switch"
          />
        </div>
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
    </>
  )
}

export default PassangerCard