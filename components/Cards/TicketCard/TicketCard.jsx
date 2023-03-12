import React from 'react'
import { Card } from 'react-bootstrap'
import garuda from '../../../src/assets/airlines/garuda.png'
import Iconflight from '../../../src/assets/icon/flight.png'
import lugage from '../../../src/assets/icon/lugage.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCircle, faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'


const TicketCard = (props) => {

    console.log(props.price);
    const [width, setWidth] = useState(window.innerWidth);
    // const breakpoint = 700;
    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        // subscribe to window resize event "onComponentDidMount"
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            // unsubscribe "onComponentDestroy"
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);

    return (

        <Card className={`border-0 shadow-small px-3 py-4 mb-3`}>
            <div className="airlines d-flex justify-content-md-start justify-content-between align-items-center view-details">
                <img src={garuda} alt="" className='d-none d-md-block' />
                <p className='text-secondary ms-0 ms-md-4 my-0 py-0'>Garuda Indonesia</p>
                <h2 className='accordion-header d-md-none d-block' id={`flush-heading${props.id}`}>
                    <button className='accordion-button fw-bolder text-blue' type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${props.id}`} aria-expanded="true" aria-controls={`flush-collapseOne${props.id}`}>
                        View Details
                    </button>
                </h2>
            </div>
            <div className="row mt-4 justify-content-between text-center">
                <div className={` col d-flex text-start gap-3 text-dark `}>
                    <div className='fw-bold'>{props.starting_place}<br /><span style={{ fontSize: '12px', fontWeight: 'lighter' }}>{props.departure_time}</span></div>
                    <img src={Iconflight} width={15} height={15} className='mt-2' alt="" />
                    <div className='ms-2 fw-bold'>{props.destination_place} <br /><span style={{ fontSize: '12px', fontWeight: 'lighter' }}>{props.arrived_time}</span></div>
                </div>
                <div className="col d-none d-md-block">
                    <p className='m-0 p-0 text-secondary'>3 Hours 11 Minutes</p>
                    <p className='m-0 p-0' style={{ fontSize: '12px' }}>(1 Transit)</p>
                </div>
                <div className="col d-md-flex gap-3 justify-content-center d-none">
                    <span><img src={lugage} alt="" /></span>
                    <span><img src={lugage} alt="" /></span>
                    <span><img src={lugage} alt="" /></span>
                </div>
                <div className="col text-end text-md-center text-secondary">
                    <p><span className='text-blue'> {props.price} </span>/pax</p>
                </div>
                <div className="col d-none d-md-block ">
                    <Link className='btn btn-blue btn-width'>Select</Link>
                </div>
                <div className="col-12 mt-3">
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header d-none d-md-block" id={`flush-heading${props.id}`}>
                                <button className="accordion-button accordions collapsed text-blue fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${props.id}`} aria-expanded="false" aria-controls={`flush-collapseOne${props.id}`}>
                                    View Details
                                </button>
                            </h2>
                            <div id={`flush-collapse${props.id}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${props.id}`} data-bs-parent="#accordionFlushExample">
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
                                        <div className="col-12 d-md-none d-block">
                                            <hr />
                                        </div>
                                        <div className="col-12 d-flex gap-3 d-md-none mt-3">
                                            <p>Facility : </p>
                                            <span><img src={lugage} alt="" /></span>
                                            <span><img src={lugage} alt="" /></span>
                                            <span><img src={lugage} alt="" /></span>
                                        </div>
                                        <div className="col-12 mt-4 d-md-none d-flex justify-content-between">
                                            <span className='text-danger fw-bolder pt-2'>{props.price}</span>
                                            <Link className='btn btn-blue'>Select</Link>
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