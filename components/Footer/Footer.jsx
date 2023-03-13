import React from 'react';
import logo from '../../src/assets/navbar/logo.png';
import apple from '../../src/assets/footer/apple-store.png';
import playstore from '../../src/assets/footer/playstore.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <>
      <div className="container footer d-none d-md-flex justify-content-between px-3 py-4 h-100 mt-5">
        <div className="d-flex flex-column bd-highlight me-4">
          <div className="mb-auto bd-highlight">
            <img src={logo} alt="logo" />
            <span className="ms-3 fs-5 fw-bolder mb-4">Ankasa</span>
            <p className="mt-3 text-secondary">
              Find your Flight and explore the <br></br>
              world with us. We will take care of the rest
            </p>
          </div>
          <p className="text-secondary bd-highlight mt-6">© Ankasa. All Rights Reserved.</p>
        </div>
        <div className="me-4">
          <p className="fw-bolder mb-4">Features</p>
          <p className="text-secondary">Find Ticket</p>
          <p className="text-secondary">My Booking</p>
          <p className="text-secondary">Chat</p>
          <p className="text-secondary">Notification</p>
        </div>
        <div className="d-flex flex-column me-4">
          <p className="fw-bolder mb-4">Download Angkasa App</p>
          <img src={apple} alt="app-store" style={{ width: '90%' }} />
          <img className="mt-3" src={playstore} alt="playstore" style={{ width: '90%' }} />
        </div>
        <div className="d-flex flex-column bd-highlight">
          <div className="mb-auto bd-highlight">
            <p className="fw-bolder mb-4">Follow Us</p>
            <div className="d-flex justify-content-between">
              <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
            </div>
          </div>
          <div className="mb-3">
            <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
            <span className="text-secondary bd-highlight ms-2">Jakarta Indonesia</span>
          </div>
        </div>
      </div>
      {/* Make a Responsive */}
      <div className="footer d-md-none justify-content-around p-3 h-100 mt-5">
        <div className="d-flex flex-column bd-highlight">
          <div className="mb-auto bd-highlight">
            <img src={logo} alt="logo" />
            <span className="ms-3 fs-5 fw-bolder mb-4">Ankasa</span>
            <p className="mt-4 text-secondary lh-base">
              Find your Flight and explore the <br></br>
              world with us. We will take care of the rest
            </p>
          </div>
        </div>
        <p className="fw-bolder mb-4 mt-3">Features</p>
        <div className="d-flex justify-content-between">
          <p className="text-secondary">Find Ticket</p>
          <p className="text-secondary">My Booking</p>
          <p className="text-secondary">Chat</p>
          <p className="text-secondary">Notification</p>
        </div>
        <p className="fw-bolder mb-4 mt-3">Download Angkasa App</p>
        <div className="d-flex flex-column flex-sm-row">
          <img src={apple} classname="mb-4" alt="app-store" style={{ width: '150px' }} />
          <img className="ms-0 ms-sm-3 mt-4 mt-sm-0" src={playstore} alt="playstore" style={{ width: '150px' }} />
        </div>
        <div className="d-flex flex-column bd-highlight">
          <div className="mb-auto bd-highlight mt-4">
            <p className="fw-bolder mb-4">Follow Us</p>
            <div className="d-flex">
              <FontAwesomeIcon icon={faFacebookF} className="me-3"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faTwitter} className="me-3"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faInstagram} className="me-3"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
            </div>
          </div>
          <div className="mt-4">
            <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
            <span className="text-secondary bd-highlight ms-2">Jakarta Indonesia</span>
            <p className="text-secondary bd-highlight mt-3">© Ankasa. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
