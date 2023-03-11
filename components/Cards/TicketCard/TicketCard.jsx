import React from 'react'
import { Card } from 'react-bootstrap'
import garuda from '../../../src/assets/airlines/garuda.png'
import Iconflight from '../../../src/assets/icon/flight.png'
import lugage from '../../../src/assets/icon/lugage.png'
import { Link } from 'react-router-dom'

const TicketCard = () => {
    return (
        <Card className={`border-0 shadow-small px-3 py-4`}>
            <div className="airlines d-flex justify-content-md-start justify-content-between align-items-center">
                <img src={garuda} alt="" className='d-none d-md-block' />
                <p className='text-secondary ms-0 ms-md-4 my-0 py-0'>Garuda Indonesia</p>
                <h2 className="accordion-header d-md-none d-block" id="panelsStayOpen-headingOne">
                    <button className="accordion-button fw-bolder text-blue" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        View Details
                    </button>
                </h2>

            </div>
            <div className="row mt-4 justify-content-between text-center">
                <div className="col d-flex text-start gap-3">
                    <div className='fw-bold'>IDN <br /><span style={{ fontSize: '12px', fontWeight: 'lighter' }}>15.03</span></div>
                    <img src={Iconflight} width={15} height={15} className='mt-2' alt="" />
                    <div className='ms-2 fw-bold'>IDN <br /><span style={{ fontSize: '12px', fontWeight: 'lighter' }}>15.03</span></div>
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
                <div className="col text-end text-md-center">
                    <p><span className='text-blue'> $ 214,00 </span>/pax</p>
                </div>
                <div className="col d-none d-md-block ">
                    <Link className='btn btn-blue btn-width'>Select</Link>
                </div>
                <div className="col-12 mt-3">
                    <div className="accordion accordion-flush" id="accordionPanelsStayOpenExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header d-none d-md-block" id="panelsStayOpen-headingOne">
                                <button className="accordion-button accordions fw-bolder text-blue" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                    View Details
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                <div className="accordion-body text-start">
                                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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