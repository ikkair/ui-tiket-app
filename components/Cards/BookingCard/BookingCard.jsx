import { faCircleChevronRight, faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import style from "./BookingCard.module.css";

const BookingCard = ({ title, children, header }) => {
  return (
    <Card className={"border-0 shadow mb-3 main-border overflow-hidden"}>
      {header && (
        <Card.Header className={`${style.cardHeader}  pb-0 px-4 pt-4`}>
          <div className="row">
            <div className="col-12">
              <span className="text-dark">Monday, 20 Juli '30 - 15:33</span>
            </div>
            <div className="col-12 d-flex gap-4 my-1">
              <span className="fw-bold fs-4 text-dark">Medan</span>
              <span className="text-dark fs-5"><FontAwesomeIcon icon={faPlaneDeparture} className={`text-secondary`} /></span>
              <span className="fw-bold fs-4 text-dark">Bali</span>
            </div>
            <div className="col-12 pb-3">
              <span className="text-secondary">Garuda Indonesia, AB-221</span> 
            </div>
          </div>
        </Card.Header>
      )}
      <Card.Body className={`px-4 py-0 pb-3`}>
        <div className="row mt-3">
          <div className="col d-flex align-items-center gap-5">
            <span className="text-secondary">Status</span>
            <button className="btn btn-danger">Waiting for payment</button>
          </div>
          <div className="col-auto d-flex align-items-center">
            <Link to={'/my-booking/id_booking'} className={`fw-semibold text-decoration-none`}>View Details 
              <FontAwesomeIcon className={`ms-3`} icon={faCircleChevronRight} />
            </Link>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default BookingCard;
