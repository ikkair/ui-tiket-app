import { faCircleChevronRight, faPerson, faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useGetFlightByIdQuery } from "../../../src/features/flight/flightApi";
import { useGetPassangersByIdBookingQuery } from "../../../src/features/passanger/passangerApi";
import style from "./BookingCard.module.css";

const BookingCard = ({ header, classHeader, id_flight, status, id_booking }) => {

  // console.log(id_flight);
  const { data: flight } = useGetFlightByIdQuery(id_flight);
  const { data: passangers } = useGetPassangersByIdBookingQuery(id_booking)
  console.log(passangers);
  // console.log(flight);

  return (
    <Card className={"border-0 mb-3 main-border overflow-hidden"}>
      {header && (
        <Card.Header className={`${style.cardHeader} ${classHeader} pb-0 px-4 pt-4`}>
          <div className="row">
            <div className="col-12">
              <span className="text-dark">{`Monday, ${flight?.departure_date} - ${flight?.departure_time}`}</span>
            </div>
            <div className="col-12 d-flex gap-4 my-1">
              <span className="fw-bold fs-4 text-dark">Medan</span>
              <span className="text-dark fs-5"><FontAwesomeIcon icon={faPlaneDeparture} className={`text-secondary`} /></span>
              <span className="fw-bold fs-4 text-dark">Bali</span>
            </div>
            <div className="col-12 pb-1">
              <span className="text-secondary ">{`${flight?.name_airline}, ${flight?.gate}${flight?.terminal} `}</span>
              {passangers?.length > 0 ?
                <hr /> : ''
              }
            </div>
            <div className="mb-2">
              {passangers?.length > 0 ?
                <a className="text-blue no-underline fw-bold" data-bs-toggle="collapse" href={`#collapseExample${id_booking}`} role="button" aria-expanded="false" aria-controls="collapseExample">
                  Passenger <FontAwesomeIcon className="ms-1" icon={faPerson}/>
                </a>
                : ''
              }
              {passangers?.map((pas, i) => (
                <div className="collapse mt-2" id={`collapseExample${pas.id_booking}`} key={i}>
                  <Link to={`/my-booking/tickets/${pas.id}`} className="text-blue no-underline">{i+1}. {pas.name}</Link>
                </div>
              ))}

            </div>
          </div>
        </Card.Header>
      )}
      <Card.Body className={`px-4 py-0 pb-3`}>
        <div className="row mt-3">
          <div className="col d-flex align-items-center gap-5">
            <span className="text-secondary">Status</span>
            {status === 1 ? <button className="btn btn-success">Success payment</button>
              : status === 0 ? <button className="btn btn-warning">Waiting for payment</button>
                : <button className="btn btn-danger">Cancel payment</button>}

          </div>
          <div className="col-auto d-none d-sm-flex align-items-center">
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
