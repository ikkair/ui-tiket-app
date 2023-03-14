import React from 'react'
import { Card } from 'react-bootstrap'
import garuda from '../../../src/assets/airlines/garuda.png'
import Iconflight from '../../../src/assets/icon/flight.png'
import lugage from '../../../src/assets/icon/lugage.png'
import wifi from '../../../src/assets/icon/wifi.png'
import meal from '../../../src/assets/icon/burger.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'

const TicketCard = (props) => {

  return (

    <Card className={`border-0 shadow-small px-3 py-4 mb-3`}>
      <div className="airlines d-flex justify-content-md-start justify-content-between align-items-center view-details">
        <img src={props?.photo} width={60} height={50} alt="" className='d-none d-md-block' />
        <p className='text-secondary ms-0 ms-md-4 my-0 py-0'>{props.name_airline}</p>
        <h2 className='accordion-header d-md-none d-block' id={`flush-heading${props.id_airline}`}>
          <button className='accordion-button fw-bolder text-blue' type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${props.id_airline}`} aria-expanded="true" aria-controls={`flush-collapseOne${props.id_airline}`}>
            View Details
          </button>
        </h2>
      </div>
      <div className="row mt-4 justify-content-between text-center">
        <div className={`col d-flex text-start gap-3 text-dark `}>
          <div className='fw-bold'>{props.starting_place}<br /><span style={{ fontSize: '12px', fontWeight: 'lighter' }}>{props.departure_time}</span></div>
          <img src={Iconflight} width={15} height={15} className='mt-2' alt="" />
          <div className='ms-2 fw-bold'>{props.destination_place} <br /><span style={{ fontSize: '12px', fontWeight: 'lighter' }}>{props.arrived_time}</span></div>
        </div>
        <div className="col d-none d-xl-block">
          <p className='m-0 p-0 text-secondary'>{props.duration_time}</p>
          <p className='m-0 p-0' style={{ fontSize: '12px' }}>({props.transit})</p>
        </div>
        <div className="col d-lg-flex gap-3 justify-content-center d-none">
          {props.meal || props.wifi || props.luggage ? (
            <>
              <span><img src={props.luggage === true ? lugage : ''} alt="" /></span>
              <span><img src={props.wifi === true ? wifi : ''} alt="" /></span>
              <span><img src={props.meal === true ? meal : ''} alt="" /></span>
            </>
          ) : <p className='text-secondary'>Reguler </p>}
        </div>
        <div className="col text-end text-md-center text-secondary">
          <p><span className='text-blue'> {props.price} </span>/pax</p>
        </div>
        <div className="col d-none d-lg-block ">
          <Link to={`/flights/${props.id}?capacity=${props.capacity}`} className='btn btn-blue'>Select</Link>
        </div>
        <div className="col-12 mt-3">
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header d-none d-md-block" id={`flush-heading${props.id_airline}`}>
                <button className="accordion-button accordions collapsed text-blue fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${props.id_airline}`} aria-expanded="false" aria-controls={`flush-collapseOne${props.id_airline}`}>
                  View Details
                </button>

              </h2>
              <div id={`flush-collapse${props.id_airline}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${props.id_airline}`} data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                  <div className="row">
                    <div className="col-12 text-start d-flex justify-content-between d-block">
                      <span>{props.starting_place} <FontAwesomeIcon icon={faArrowRight} /> {props.destination_place}</span>
                      <span>{props.departure_date}</span>
                    </div>
                    <div className="col-12 d-block">
                      <hr />
                    </div>
                    <div className="col-12 text-start d-flex justify-content-between d-block">
                      <span>{props.departure_time} </span>
                      <FontAwesomeIcon icon={faCircleArrowLeft} />
                      Time destination
                      <FontAwesomeIcon icon={faCircleArrowRight} />
                      <span>{props.arrived_time}</span>
                    </div>
                    <div className="col-12 d-lg-none d-block">
                      <hr />
                    </div>
                    <div className="col-12 d-flex gap-3 d-lg-none mt-3">
                      <p>Facility : </p>
                      {props.meal || props.wifi || props.luggage ? (
                        <>
                          <span><img src={props.luggage === true ? lugage : ''} alt="" /></span>
                          <span><img src={props.wifi === true ? wifi : ''} alt="" /></span>
                          <span><img src={props.meal === true ? meal : ''} alt="" /></span>
                        </>
                        ) : <p className='text-secondary'>Reguler </p>}
                    </div>
                    <div className="col-12 mt-4 d-lg-none d-flex justify-content-between">
                      <span className='text-danger fw-bolder pt-2'>{props.price}</span>
                      <Link to={`/flights/${props.id}?capacity=${props.capacity}`} className='btn btn-blue'>Select</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Card>
  )
}

export default TicketCard