import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Card from "react-bootstrap/Card";
import style from "./FlightAirlineDetailCard.module.css";
import airlineLogo from '../../../src/assets/flight/airlineLogo.png'
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
 
const FlightAirlineDetailCard = ({ data }) => {
  return (
    <Card className={"border-0 mb-3 shadow-none main-border overflow-hidden"}>
      <Card.Header className={`${style.cardHeader} p-3`}>
        <div className="row">
          <div className="col-12 d-flex align-items-center gap-2 fw-semibold">
            <img 
              className={`img-fluid`}
              src={airlineLogo} 
              alt="air-line-logo" 
            />
            <span className='text-secondary d-block ms-2'>{data?.name}</span>
          </div>

          <div className="col-12 d-flex gap-3 align-items-center mt-4">
            <span className="fw-semibold fs-5 text-dark">Medan</span>
            <span className="text-trinary"><FontAwesomeIcon icon={faPlaneDeparture} className={`text-secondary`} /></span>
            <span className="fw-semibold fs-5 text-dark">Bali</span>
          </div>
          <div className="row mt-3">
            <div className="col-12">
              <span className='text-dark-secondary d-block text-medium'>Sunday, 15 Agustus 2020  12:33 - 15:21</span>
            </div>
            <div className="col-12 mt-3">
              <span className="d-block text-blue">
                <FontAwesomeIcon className="me-3" icon={faCircleCheck} /> Refundable
              </span>
              <span className="d-block text-blue mt-1">
                <FontAwesomeIcon className="me-3" icon={faCircleCheck} /> Can reschedule
              </span>
            </div>
          </div>
        </div>
      </Card.Header>
      <Card.Body className={`px-4 py-3 d-flex justify-content-between align-items-center`}>
        <span className="fs-6 fw-semibold d-block">Total Payment</span>
        <span className="fs-5 fw-semibold text-blue">Rp. 20.0000</span>
      </Card.Body>
    </Card>
  );
};

export default FlightAirlineDetailCard;
