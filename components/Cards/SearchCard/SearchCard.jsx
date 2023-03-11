import React from 'react'
import { Card } from 'react-bootstrap'
// import Form from "react-bootstrap/Form";

export const SearchCard = () => {
    return (
        <Card className={`border-0 shadow px-3 py-4`}>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
                            Transit
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <div class="form-check d-flex justify-content-between flex-row-reverse mb-3">
                                <input class="form-check-input me-1" type="checkbox" value="" id="defaultCheck1"/>
                                <label class="form-check-label p-0 m-0" for="defaultCheck1">
                                        <span style={{marginLeft: '-25px'}}>Price</span>
                                </label>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
                
            </div>
        </Card>
    )
}
