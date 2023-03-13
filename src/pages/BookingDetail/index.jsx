import React from 'react';
import style from './booking.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Garuda from '../../assets/booking/garuda.png';
import QR from '../../assets/booking/QR.png';
import plane from '../../assets/booking/Vector.png';
import BaseLayout from '../../../template/BaseLayout/BaseLayout';
import Line from '../../assets/booking/Line.png';

const BookingDetail = () => {
  return (
    <>
      <BaseLayout>
        <div className={`${style.containerColor} container-fluid d-flex justify-content-center py-5`}>
          <div className={`${style.wrap} p-5 position-relative`}>
            <div className="row mb-5">
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
              <div className="row align-items-center ">
                <div className="col-7">
                  <div className="row align-items-center justify-content-between">
                    <div className="col-auto">
                      <img src={Garuda} className={`${style.imageCustom}`}></img>
                    </div>
                    <div className={`col-auto ${style.marginCustomDes}`}>
                      <div className={`flightDes d-flex align-items-center`}>
                        <h4 className="fw-bold">IDN</h4>
                        <img src={plane} className="mx-5" alt="" />
                        <h4 className="fw-bold">IDN</h4>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center mt-5">
                    <div className="col-md-3 col-sm-4">
                      <p className="text-muted">Code</p>
                      <p className="fw-semibold">AB-221</p>
                    </div>
                    <div className="col-md-3 col-sm-4 offset-md-2">
                      <p className="text-muted">Class</p>
                      <p className="fw-semibold">Economy</p>
                    </div>
                  </div>
                  <div className="row align-items-center mt-3">
                    <div className="col-md-3 col-sm-4">
                      <p className="text-muted">Terminal</p>
                      <p className="fw-semibold">A</p>
                    </div>
                    <div className="col-md-3 col-sm-4 offset-md-2">
                      <p className="text-muted">Gate</p>
                      <p className="fw-semibold">221</p>
                    </div>
                  </div>
                  <div className="row align-items-center mt-3">
                    <div className="col-auto">
                      <p className="text-muted">Departure</p>
                      <p className="fw-semibold">Monday, 20 July ‘20 - 12:33</p>
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
