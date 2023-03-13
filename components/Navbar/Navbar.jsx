import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faRightFromBracket,
  faCaretDown,
  faUser,
  faSearch,
  faBarsStaggered,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import logo from '../../src/assets/navbar/logo.png'
import photo from '../../src/assets/profile/profile.jpg'
import style from './Navbar.module.css'
import navbarBannerLogo from '../../src/assets/navbar/bannerLogo.png'


export const Navbar = () => {

  const urlPath = window.location.pathname
  
  const logoutHandler = async (e) => {

  }

  const urlWithoutBanner = ['/home', '/']

  const renderBanner = () => {
    if(!urlWithoutBanner.includes(urlPath)){
      return (
        <span className={`${style.bannerContainer} d-block navbar-banner bg-blue position-absolute`}>
          <img src={navbarBannerLogo} className={'img-fluid'} alt="" />
        </span>
      )
    }
  }

  return (
    <div className='position-relative bg-transparent'>
      <nav
      className={`${style.navbar} navbar navbar-expand-lg d-flex sticky-top justify-content-center flex-column pb-0`}
    >
      <div className="container pb-2 d-flex justify-content-between">
        {/* <!-- Nav Logo --> */}
        <Link
          className="navbar-brand ps-0 d-flex align-items-center me-4 btn fs-5 text-dark"
          to="/home"
        >
          <img
            src={logo}
            alt="logo-image"
            className="img-fluid small-logo"
          />
          <span className="text-dark fs-5 ms-2 fw-semibold">Ankasha</span>
        </Link>

        {/* Search Tablet Mode */}
        <div className={`d-none d-sm-flex d-lg-none position-relative align-items-center`}>
          <input 
              type="text" 
              name={`search`} 
              className={'text-medium py-2 pe-3 ps-5 form-control bg-trinary border-0 shadow-none '} 
              placeholder={'Where you want to go?'}
            />
            <FontAwesomeIcon className={`${style.searchIcon}`} icon={faSearch} />
        </div>
        {/* End Search Tablet Mode */}

        <div className="mobile-menu d-flex gap-2">
          <FontAwesomeIcon className={`pointer d-block d-sm-none text-light bg-blue rounded-circle p-2`} icon={faSearch} />

          <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBarsStaggered} />
          </button>
        </div>
        {/* <!-- End Nav Logo --> */}

        <div className="d-none d-lg-flex gap-4">
          <div className={`${style.inputSearch} search d-flex position-relative align-items-center`}>
            <input 
              type="text" 
              name={`search`} 
              className={'text-medium py-2 pe-3 ps-5 form-control bg-trinary border-0 shadow-none '} 
              placeholder={'Where you want to go?'}
            />
            <FontAwesomeIcon className={`${style.searchIcon}`} icon={faSearch} />
          </div>

          <div className="d-none d-lg-flex justify-content-center position-relative align-items-center gap-4">
            <span className='d-flex'>
              <Link to={'/tickets'} className={'text-decoration-none text-softdark fw-semibold'}>Find Ticket</Link>
            </span>
            <span className='d-flex'>
              <Link to={'/tickets'} className={'text-decoration-none text-softdark fw-semibold'}>My Booking</Link>
            </span>
          </div>
        </div>

        {localStorage.getItem('token') ? (
          <div className="d-none d-lg-flex gap-2">
            <Link
              to=""
              className={`btn fs-5 text-light btn position-relative text-light`}
              data-bs-target="#exampleModalToggle" data-bs-toggle="modal"
            >
              <FontAwesomeIcon
                className="text-softdark"
                icon={faEnvelope}
              ></FontAwesomeIcon>
              
            </Link>

            <Link to="" className="text-light btn fs-5">
              <FontAwesomeIcon
                className="text-softdark"
                icon={faBell}
              ></FontAwesomeIcon>
            </Link>

            <div className="dropdown navbar-profile profile ms-2">
              <div
                className="img-group d-flex align-items-center"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={photo}
                  className={`rounded-circle me-2`}
                  alt="profil-user"
                  width={40}
                  height={40}
                />
                <FontAwesomeIcon
                  className="fs-4 text-dark"
                  icon={faCaretDown}
                />
              </div>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <Link to={`/profile`} className="dropdown-item">
                    <FontAwesomeIcon className="me-2" icon={faUser} /> Profile
                  </Link>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={logoutHandler}
                  >
                    <FontAwesomeIcon
                      className="me-2"
                      icon={faRightFromBracket}
                    />{" "}
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="d-none d-lg-flex gap-2">
            <Link to={`/register`} className={`btn bg-blue pt-1`}>Sign Up</Link>
            <Link to={`/login`} className={`btn border-blue text-blue pt-1`}>Sign In</Link>
          </div>
        )}
        

       
      </div>
      </nav>

      {renderBanner()}
     
    </div>
  )
}
