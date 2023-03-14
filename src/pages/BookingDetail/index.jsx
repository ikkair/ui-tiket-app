import React from 'react';
import style from './booking.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Garuda from '../../assets/booking/garuda.png';
import QR from '../../assets/booking/QR.png';
import plane from '../../assets/booking/Vector.png';
import BaseLayout from '../../../template/BaseLayout/BaseLayout';
import Line from '../../assets/booking/Line.png';
import { useGetTicketByIdPassengerQuery } from '../../features/ticket/ticketApi';
import { useParams } from 'react-router-dom';
import { useGetPassangerByIdUserQuery } from '../../features/passanger/passangerApi';
import { useGetBookingByIdQuery } from '../../features/booking/bookingApi';
import { useGetFlightByIdQuery } from '../../features/flight/flightApi';

const BookingDetail = () => {
  const { id } = useParams();
  const { data: ticket } = useGetTicketByIdPassengerQuery(id);
  const { data: passenger } = useGetPassangerByIdUserQuery(ticket?.id_passenger);
  const { data: booking } = useGetBookingByIdQuery(passenger?.id_booking);
  const { data: flight } = useGetFlightByIdQuery(booking?.id_flight);

  // console.log(booking);

  return (
    <>
      <BaseLayout>
        <div className={`${style.containerColor} container-fluid d-flex justify-content-center py-5`}>
          <div className={`${style.wrap} p-5 position-relative`}>
            <div className="row mb-5 text-center text-sm-start">
              <div className="col text-start">
                <h4 className="fw-bold">Booking Pass</h4>
              </div>
              <div className="col-1 text-end">
                <h4>
                  <FontAwesomeIcon className={`fw-bold ${style.blue}`} icon={faEllipsisVertical}></FontAwesomeIcon>
                </h4>
              </div>
            </div>
            <div className="data border rounded p-4">
              <div className="row align-items-center text-center text-sm-start ">
                <div className="col-12 col-sm-7">
                  <div className="row align-items-center justify-content-between text-center text-sm-start">
                    <div className="col-auto">
                      <img src={flight?.image_airline} className={`${style.imageCustom}`}></img>
                    </div>
                    <div className={`col-auto ${style.marginCustomDes}`}>
                      <div className={`flightDes d-flex align-items-center`}>
                        <h4 className="fw-bold">{flight?.starting_place}</h4>
                        <img src={plane} className="mx-5" alt="" />
                        <h4 className="fw-bold">{flight?.destination_place}</h4>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-centerbg-primary mt-5 text-center text-sm-start">
                    <div className="col-6 col-md-3 col-sm-4">
                      <p className="text-muted">Code</p>
                      <p className="fw-semibold">{ticket?.code}</p>
                    </div>
                    <div className="col-6 col-md-3 col-sm-4 offset-md-2">
                      <p className="text-muted">Class</p>
                      <p className="fw-semibold">{flight?.class_flight}</p>
                    </div>
                  </div>
                  <div className="row align-items-center mt-3 text-center text-sm-start">
                    <div className="col-6 col-md-3 col-sm-4">
                      <p className="text-muted">Terminal</p>
                      <p className="fw-semibold">{flight?.terminal}</p>
                    </div>
                    <div className="col-6 col-md-3 col-sm-4 offset-md-2">
                      <p className="text-muted">Gate</p>
                      <p className="fw-semibold">{flight?.gate}</p>
                    </div>
                  </div>
                  <div className="row align-items-center mt-3 text-center text-sm-start">
                    <div className="col-12">
                      <p className="text-muted">Departure</p>
                      <p className="fw-semibold">{`${flight?.departure_date} - ${flight?.departure_time}`}</p>
                    </div>
                  </div>
                </div>
                <div className={`col-1 text-center ${style.none}`}>
                  <img src={Line} alt="" />
                </div>
                <div className="col-sm-3">
                  <img src={QR} alt="" className={style.QRCustom} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </BaseLayout>
    </>
  );
};

export default BookingDetail;
