import React from "react";
import Form from "react-bootstrap/Form";

const ProfileInputForm = ({
  type,
  name,
  placeholder,
  title,
  onchange,
  required,
  className,
  value,
}) => {
  const changeHandler = (e) => {
    onchange(e);
  };

  return (
    <>
      {type == "textarea" ? (
        <Form.Group
          className={`$ mb-3`}
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>{title}</Form.Label>
          <Form.Control
            className={`${className}`}
            name={name}
            as="textarea"
            placeholder={placeholder}
            rows={6}
            onChange={changeHandler}
            required={required || false}
            value={value}
          />
        </Form.Group>
      ) : (
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="text-secondary text-medium ps-2 mb-0">{title}</Form.Label>
          <Form.Control
            className={`${className} ps-2 shadow-none border-0 border-2 rounded-0 border-bottom`}
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={changeHandler}
            required={required || false}
            value={value}
          />
        </Form.Group>
      )}
    </>
  );
};

export default ProfileInputForm;
