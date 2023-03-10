import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faRightFromBracket,
  faCaretDown,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import logo from '../../src/assets/navbar/logo.png'
import photo from '../../src/assets/profile/profile.jpg'

export const Navbar = () => {

  const logoutHandler = async (e) => {

  }

  return (
    <nav
      className="navbar navbar-expand-lg d-flex flex-column pb-0 " style={{ background: "#ffffff" }}
    >
      <div className="container pb-2">
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
        {/* <!-- End Nav Logo --> */}

        {/* <!-- Nav Menu Mobile Mode --> */}
        <div className="d-flex gap-2 ms-auto">
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

          <div className="dropdown navbar-profile profile">
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
      </div>
    </nav>
  )
}
