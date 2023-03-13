import React from 'react';
import { Link } from 'react-router-dom';
import './Notification.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';

const Notifications = () => {
  return (
    <>
      <section className="center">
        <div hidden>
          <div data-name="popover-content">
            <div className="row mx-2 mt-2">
              <div className="col-12 fw-semibold Notif-letter-spacing text-blue">NOTIFICATIONS</div>
              <div className="col-12 d-flex justify-content-between align-items-center mt-2 mb-5">
                <h4 className="h-1 fw-bold">Notifications</h4>
                <h6 className="h-3">
                  <Link className="text-decoration-none fw-semibold text-blue">Clear</Link>
                </h6>
              </div>
            </div>
            <div className="row mx-2 overflow-notif">
              <div className="col-12 Notif-box-blue px-4 py-3 mb-4">
                <p className="text-blue fw-semibold Notif-title-box mt-0 pt-0">Congratulation</p>
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore....</p>
                <p className="m-0 p-0 text-muted">5h ago</p>
              </div>
              <div className="col-12 Notif-box-blue px-4 py-3 mb-4">
                <p className="text-blue fw-semibold Notif-title-box mt-0 pt-0">Ticket Booked</p>
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore....</p>
                <p className="m-0 p-0 text-muted">1 June 2020, 12:33 AM</p>
              </div>
              <div className="col-12 Notif-box-white px-4 py-3 mb-4">
                <p className="text-blue fw-semibold mt-0 pt-0">Continue Payment</p>
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore....</p>
                <p className="m-0 p-0 text-muted">4 May 2020, 10:43 AM</p>
              </div>
              <div className="col-12 Notif-box-white px-4 py-3 mb-4">
                <p className="text-blue fw-semibold mt-0 pt-0">Maintenance</p>
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore....</p>
                <p className="m-0 p-0 text-muted">4 May 2020, 10:43 AM</p>
              </div>
            </div>
          </div>
        </div>

        <a id="example" tabindex="0" class="btn text-light fs-5" role="button" data-bs-placement="bottom" data-bs-toggle="popover">
          <FontAwesomeIcon className="text-softdark" icon={faBell}></FontAwesomeIcon>
        </a>
      </section>
    </>
  );
};

export default Notifications;
