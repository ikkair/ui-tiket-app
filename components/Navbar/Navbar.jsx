import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faRightFromBracket, faCaretDown, faUser, faSearch, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logo from '../../src/assets/navbar/logo.png';
import photo from '../../src/assets/profile/profile.jpg';
import style from './Navbar.module.css';
import navbarBannerLogo from '../../src/assets/navbar/bannerLogo.png';
import Notifications from '../Notifications/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { useGetUserProfileQuery } from '../../src/features/auth/authApi';
import { setCredentials } from '../../src/app/reducer/authSlice';

export const Navbar = () => {
  const dispatch = useDispatch()
  const urlPath = window.location.pathname;
  const { data: userLogin, isLoading, isSuccess } = useGetUserProfileQuery()
  const user = useSelector(state => state.auth.user)
  const logoutHandler = async (e) => { };
  const urlWithoutBanner = ['/home', '/'];

  useEffect(() => {
    if (!user) {
      dispatch(setCredentials({
        user: userLogin,
        token: localStorage.getItem('token')
      }))
    }
  }, [user, isSuccess])

  const renderBanner = () => {
    if (!urlWithoutBanner.includes(urlPath)) {
      return (
        <span className={`${style.bannerContainer} d-block navbar-banner bg-blue position-absolute`}>
          <img src={navbarBannerLogo} className={'img-fluid'} alt="" />
        </span>
      );
    }
  };

  return (
    <div className="position-relative bg-transparent">
      <nav className={`${style.navbar} navbar navbar-expand-lg d-flex sticky-top justify-content-center flex-column pb-0`}>
        <div className="container pb-2 d-flex justify-content-between">
          {/* <!-- Nav Logo --> */}
          <Link className="navbar-brand ps-0 d-flex align-items-center me-4 btn fs-5 text-dark" to="/home">
            <img src={logo} alt="logo-image" className="img-fluid small-logo" />
            <span className="text-dark fs-5 ms-2 fw-semibold">Ankasha</span>
          </Link>

          {/* Search Tablet Mode */}
          <div className={`d-none d-sm-flex d-lg-none position-relative align-items-center`}>
            <input type="text" name={`search`} className={'text-medium py-2 pe-3 ps-5 form-control bg-trinary border-0 shadow-none '} placeholder={'Where you want to go?'} />
            <FontAwesomeIcon className={`${style.searchIcon}`} icon={faSearch} />
          </div>
          {/* End Search Tablet Mode */}

          <div className="mobile-menu d-flex gap-2 d-sm-none">
            <button
              class="border-0 shadow-none bg-transparent"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasScrolling"
              aria-controls="offcanvasScrolling">
              <FontAwesomeIcon icon={faBarsStaggered} />
            </button>
          </div>

          <div class="offcanvas offcanvas-start d-sm-none d-block" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div class="offcanvas-header">
              <h2 className='fw-bolder text-blue'>Ankasa</h2>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <div className="img-group d-flex justify-content-between align-items-center">
                <div className="image d-flex gap-2 align-items-center">
                  <img src={photo} className={`rounded-circle me-2`} alt="profil-user" width={40} height={40} />
                  <Link to={`/profile`} className="dropdown-item">
                    <span className="me-2 fw-bold text-blue"> Profile </span>
                  </Link>
                </div>
                <div className="logout">
                  <button className="dropdown-item" type="button" onClick={logoutHandler}>
                    <FontAwesomeIcon className="me-2" icon={faRightFromBracket} /> Logout
                  </button>
                </div>
              </div>
              <div className="search mt-4">
                <div className={`d-md-none d-flex d-lg-none position-relative align-items-center`}>
                  <input type="text" name={`search`} className={'text-medium py-2 pe-3 ps-5 form-control bg-trinary border-0 shadow-none '} placeholder={'Where you want to go?'} />
                  <FontAwesomeIcon className={`${style.searchIcon}`} icon={faSearch} />
                </div>
              </div>
              <div className="findTicket mt-4 d-grid">
                <Link to={'/tickets'} className={'btn btn-blue mb-2'}>
                  Find Ticket
                </Link>
                <Link to={'/tickets'} className={'btn btn-blue'}>
                  My Booking
                </Link>
              </div>
            </div>
          </div>

          {/* <!-- End Nav Logo --> */}

          <div className="d-none d-lg-flex gap-4">
            <div className={`${style.inputSearch} search d-flex position-relative align-items-center`}>
              <input type="text" name={`search`} className={'text-medium py-2 pe-3 ps-5 form-control bg-trinary border-0 shadow-none '} placeholder={'Where you want to go?'} />
              <FontAwesomeIcon className={`${style.searchIcon}`} icon={faSearch} />
            </div>

            <div className="d-none d-lg-flex justify-content-center position-relative align-items-center gap-4">
              <span className="d-flex">
                <Link to={'/tickets'} className={'text-decoration-none text-softdark fw-semibold'}>
                  Find Ticket
                </Link>
              </span>
              <span className="d-flex">
                <Link to={'/tickets'} className={'text-decoration-none text-softdark fw-semibold'}>
                  My Booking
                </Link>
              </span>
            </div>
          </div>

          {localStorage.getItem('token') ? (
            <div className="d-none d-lg-flex gap-2">
              <Link to="" className={`btn fs-5 text-light btn position-relative text-light`} data-bs-target="#exampleModalToggle" data-bs-toggle="modal">
                <FontAwesomeIcon className="text-softdark" icon={faEnvelope}></FontAwesomeIcon>
              </Link>

              {/* <Link to="" className="text-light btn fs-5">
              <FontAwesomeIcon className="text-softdark" icon={faBell}></FontAwesomeIcon>
            </Link> */}

              <Notifications />

              <div className="dropdown navbar-profile profile ms-2">
                <div className="img-group d-flex align-items-center" data-bs-trigger="focus" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src={photo} className={`rounded-circle me-2`} alt="profil-user" width={40} height={40} />
                  <FontAwesomeIcon className="fs-4 text-dark" icon={faCaretDown} />
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
                    <button className="dropdown-item" type="button" onClick={logoutHandler}>
                      <FontAwesomeIcon className="me-2" icon={faRightFromBracket} /> Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="d-none d-lg-flex gap-2">
              <Link to={`/register`} className={`btn bg-blue pt-1`}>
                Sign Up
              </Link>
              <Link to={`/login`} className={`btn border-blue text-blue pt-1`}>
                Sign In
              </Link>
            </div>
          )}
        </div>
      </nav>

      {renderBanner()}
    </div>
  );
};
