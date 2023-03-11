import React from 'react'
import { Card } from 'react-bootstrap'
import RangeSlider from 'react-range-slider-input/dist/components/RangeSlider'
import 'react-range-slider-input/dist/style.css'
import { useState } from 'react'

export const SearchCard = () => {
    const [value, setValue] = useState([30, 60]);
    return (
        <Card className={`border-0 shadow px-3 py-4 d-none d-md-block`}>
            <div className="accordion accordion-flush" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                        <button className="accordion-button fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Transit
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div className="accordion-body">
                            <div className="form-check d-flex justify-content-between flex-row-reverse mb-3">
                                <input className="form-check-input me-1" type="checkbox" value="" id="defaultCheck1" />
                                <label className="form-check-label p-0 m-0" for="defaultCheck1">
                                    <span style={{ marginLeft: '-25px' }}>Price</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                        <button className="accordion-button fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
                            Transit
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingTwo">
                        <div className="accordion-body">
                            <div className="form-check d-flex justify-content-between flex-row-reverse mb-3">
                                <input className="form-check-input me-1" type="checkbox" value="" id="defaultCheck1" />
                                <label className="form-check-label p-0 m-0" for="defaultCheck1">
                                    <span style={{ marginLeft: '-25px' }}>Price</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                        <button className="accordion-button fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="true" aria-controls="panelsStayOpen-collapseThree">
                            Price
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingThre">
                        <div className="accordion-body">
                            <div className="form-check text-center" style={{ marginLeft: '-25px' }}> 
                                <div className="label d-flex justify-content-between mb-3">
                                    <div className="title">Lowest</div>
                                    <div className="title">Highest</div>
                                </div>
                                <RangeSlider value={value} onInput={setValue} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}


