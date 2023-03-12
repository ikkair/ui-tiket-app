import { faBell, faGear, faPlane, faPlaneDeparture, faRightFromBracket, faSignHanging, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import photo from '../../src/assets/profile/admin.png'

const Sidebar = () => {

  const urlPath = '/admin/dashboard/airlans'

  return (
    <aside className="main-sidebar  sidebar-dark-primary elevation-4">

    <Link to="index3.html" className="brand-link text-decoration-none text-center">
      <span className="brand-text font-weight-light fs-4 fw-bold">Ankasha</span>
    </Link>

    <div className="sidebar">
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src={photo} />
        </div>
        <div className="info">
          <Link to="#" className="d-block text-decoration-none">Admin</Link>
        </div>
      </div>


      <div className="form-inline">
        <div className="input-group" data-widget="sidebar-search">
          <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
          <div className="input-group-append">
            <button className="btn btn-sidebar">
              <i className="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
      </div>


      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

          <li className="nav-item menu-open">
            <Link to="/admin/dashboard" className="nav-link active">
              <i className="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Dashboard
              </p>
            </Link>
          </li>
      
          <li className="nav-item">
            <Link to="#" className="nav-link">
              <FontAwesomeIcon className='nav-icon' icon={faUser} />
              <p>
                Users
                <i className="fas fa-angle-left right"></i>
              </p>
            </Link>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link to={`/admin/dashboard/users`} className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Users Information</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/admin/dashboard/users/create-user" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Create New User</p>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link">
              <FontAwesomeIcon className='nav-icon' icon={faPlane} />
              <p>
                Airline
                <i className="fas fa-angle-left right"></i>
              </p>
            </Link>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link to={`/admin/dashboard/airlines`} className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Airline Information</p>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link">
              <FontAwesomeIcon className='nav-icon' icon={faPlaneDeparture} />
              <p>
                Flight
                <i className="fas fa-angle-left right"></i>
              </p>
            </Link>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link to="/admin/dashboard/flights" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Flight Information</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/admin/dashboard/flights/create-flight" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Create New Flight</p>
                </Link>
              </li>
              
            </ul>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link">
              <FontAwesomeIcon className='nav-icon' icon={faSignHanging} />
              <p>
                Bookings
                <i className="fas fa-angle-left right"></i>
              </p>
            </Link>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link to="/admin/dashboard/bookings" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Booking Information</p>
                </Link>
              </li>
            </ul>
          </li>
         
          <li className="nav-header">UTILS</li>
          <li className="nav-item">
            <Link to="#" className="nav-link">
              <i className="nav-icon far fa-envelope"></i>
              <p>
                Mailbox
                <i className="fas fa-angle-left right"></i>
              </p>
            </Link>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link to="pages/mailbox/mailbox.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Inbox</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="pages/mailbox/compose.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Compose</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="pages/mailbox/read-mail.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Read</p>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link">
              <FontAwesomeIcon className='nav-icon' icon={faBell} />
              <p>
                Notification
                <i className="fas fa-angle-left right"></i>
              </p>
            </Link>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link to="pages/mailbox/mailbox.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Inbox</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="pages/mailbox/compose.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Compose</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="pages/mailbox/read-mail.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Read</p>
                </Link>
              </li>
            </ul>
          </li>
        
          <li className="nav-header">OTHER MENU</li>
          <li className="nav-item">
            <Link to="iframe.html" className="nav-link">
              <FontAwesomeIcon className='nav-icon' icon={faGear} />
              <p>Setting</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="https://adminlte.io/docs/3.1/" className="nav-link">
              <FontAwesomeIcon className='nav-icon text-danger' icon={faRightFromBracket} />
              <p className='text-danger'>Logout</p>
            </Link>
          </li>
        </ul>
      </nav>
      
    </div>

    </aside>
  )
}

export default Sidebar