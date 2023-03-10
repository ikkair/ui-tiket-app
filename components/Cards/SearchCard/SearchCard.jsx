import React from 'react'
import { Card } from 'react-bootstrap'

export const SearchCard = () => {
    return (
        <Card className={`border-0 shadow px-3 py-4`}>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
                            <span className="fab fa-leanpub me-2"></span>
                            What is the purpose of a FAQ?
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <div class="form-check">
                                <label class="form-check-label">Option 1</label>
                                <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" checked/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}
