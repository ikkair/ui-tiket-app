import { faCircleArrowLeft, faCircleArrowRight, faPerson, faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useGetFlightByIdQuery } from '../../../src/features/flight/flightApi';
import { useGetPassangersByIdBookingQuery } from '../../../src/features/passanger/passangerApi';
import style from './BookingCard.module.css';
import { FormatRupiah } from '@arismun/format-rupiah';
import lugage from '../../../src/assets/icon/lugage.png'
import wifi from '../../../src/assets/icon/wifi.png'
import meal from '../../../src/assets/icon/burger.png'

const BookingCard = ({ header, classHeader, id_flight, status, id_booking, starting_place, destination_place }) => {
  const { data: flight } = useGetFlightByIdQuery(id_flight);
  const { data: passangers } = useGetPassangersByIdBookingQuery(id_booking);
  console.log(flight);

  console.log(passangers);
  return (
    <Card className={'border-0 mb-3 main-border overflow-hidden'}>
      {header && (
        <Card.Header className={`${style.cardHeader} ${classHeader} pb-0 px-4 pt-4`}>
          <div className="row">
            <div className="col-12">
              <span className="text-dark">{`Monday, ${flight?.departure_date} - ${flight?.departure_time}`}</span>
            </div>
            <div className="col-12 d-flex gap-4 my-1">
              <span className="fw-bold fs-4 text-dark">{flight?.starting_place}</span>
              <span className="text-dark fs-5">
                <FontAwesomeIcon icon={faPlaneDeparture} className={`text-secondary`} />
              </span>
              <span className="fw-bold fs-4 text-dark">{flight?.destination_place}</span>
            </div>
            <div className="col-12 pb-4">
              <span className="text-secondary ">{`${flight?.name_airline}, ${flight?.gate}${flight?.terminal} `}</span>
              {passangers?.length > 0 ? '' : ''}
            </div>
            <div className="mb-2">
              {passangers?.length > 0 ? (
                <a className="text-blue no-underline fw-bold" data-bs-toggle="collapse" href={`#collapseExample${id_booking}`} role="button" aria-expanded="false" aria-controls="collapseExample">
                  Passenger <FontAwesomeIcon className="ms-1" icon={faPerson} />
                </a>
              ) : (
                ''
              )}
              {passangers?.map((pas, i) => (
                <div className="collapse pt-2" id={`collapseExample${pas.id_booking}`} key={i}>
                  <Link to={status === 1 ? `/my-booking/ticket/${pas.id}` : '#'} className="text-blue no-underline">
                    {i + 1}. {pas.name}
                  </Link>
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
            {status === 1 ? <button className="btn btn-success">Success payment</button> : status === 0 ? <button className="btn btn-warning">Waiting for payment</button> : <button className="btn btn-danger">Cancel payment</button>}
          </div>
          <div className="col-auto d-none d-sm-flex align-items-center">
            {/* <Link to={'/my-booking/id_booking'} className={`fw-semibold text-decoration-none`}>
              View Details
              <FontAwesomeIcon className={`ms-3`} icon={faCircleChevronRight} />
            </Link> */}

            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id={`flush-heading${id_booking}`}>
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${id_booking}`} aria-expanded="false" aria-controls={`flush-collapse${id_booking}`}>
                    View details
                  </button>
                </h2>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div id={`flush-collapse${id_booking}`} class="accordion-collapse collapse" aria-labelledby={`flush-heading${id_booking}`} data-bs-parent="#accordionFlushExample" aria-controls={`flush-collapse${id_booking}`}>
              <div class="accordion-body">
                {/* <hr /> */}
                <div className="row mt-2">
                  <div className="col-12 d-flex justify-content-between align-items-center">
                    <div className="brand d-flex align-items-center align-items-center">
                      <img src={flight?.image_airline} width={70} height={50} alt="" className='d-none d-md-block' />
                      <p className='text-secondary ms-0 ms-md-4 my-0 py-0'>{flight?.name_airline}</p>
                    </div>
                    <div className='text-end fw-bolder text-danger'><FormatRupiah value={flight?.price*passangers?.length} /></div>
                  </div>
                  <div className="col-12 text-start d-flex justify-content-between d-block my-4 align-items-center">
                    <span>{flight?.departure_time} </span>
                    <FontAwesomeIcon icon={faCircleArrowLeft} />
                    {flight?.duration_time}
                    <FontAwesomeIcon icon={faCircleArrowRight} />
                    <span>{flight?.arrived_time}</span>
                  </div>
                  <div className="col-12 d-flex gap-3">
                    <p>Facility : </p>
                    {flight?.meal || flight?.wifi || flight?.luggage ? (
                      <>
                        <span><img src={flight?.luggage === true ? lugage : ''} alt="" /></span>
                        <span><img src={flight?.wifi === true ? wifi : ''} alt="" /></span>
                        <span><img src={flight?.meal === true ? meal : ''} alt="" /></span>
                      </>
                    ) : <p className='text-secondary'>Reguler </p>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default BookingCard;
