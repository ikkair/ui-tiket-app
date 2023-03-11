import React from 'react'
import Form from 'react-bootstrap/Form';

const FormInput = ({title, type, name, placeholder, value, onchange}) => {
  return (
    <Form.Group className="mb-3" controlId={'name'}>
      <Form.Label className='fw-semibold'>{title}</Form.Label>
      <Form.Control 
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onchange(e)}
      />
    </Form.Group>
  )
}

export default FormInput